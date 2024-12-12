import { test } from '@substrate-system/tapzero'
import fs from 'node:fs'
import throughput from '../src/index.js'

test("Let's measure how fast we can read from /dev/urandom", async t => {
    t.plan(1)
    const speed = throughput()
    const stream = fs.createReadStream('/dev/urandom')

    return new Promise<void>(resolve => {
        stream.once('data', function onData (data) {
            // Simply call speed with the amount of bytes transferred
            const bytesPerSecond = speed(data.length)

            t.equal(typeof bytesPerSecond, 'number', 'should return a number')

            console.log(bytesPerSecond + ' bytes/second')

            resolve()
            stream.destroy()
        })
    })
})
