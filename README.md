# throughput
![tests](https://github.com/substrate-system/throughput/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/throughput?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/throughput)](https://packagephobia.com/result?p=@substrate-system/throughput)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Speed measurement

## Contents

<!-- toc -->

- [install](#install)
- [Usage](#usage)
- [License](#license)

<!-- tocstop -->

## fork

This is a fork of [ThaUnknown/throughput](https://github.com/ThaUnknown/throughput/).

## install

```sh
npm i -S @substrate-system/throughput
```

## Usage
Import as normal.

``` js
import { throughput } from '@substrate-system/throughput'
import fs from 'node:fs'

// Let's measure how fast we can read from /dev/urandom
const speed = throughput()
const stream = fs.createReadStream('/dev/urandom')

stream.on('data', function (data) {
  // Simply call speed with the amount of bytes transferred
  const bytesPerSecond = speed(data.length)

  console.log(bytesPerSecond + ' bytes/second')
})
```

You can always get the current speed by calling `speed()`.

Per default `throughput` uses a 5 second buffer.
To change this simply pass another value to the constructor

```js
const speed = throughput(20)  // use a 20s buffer instead
```

This is an improved version of [speedometer](https://github.com/mafintosh/speedometer) by [@mafintosh](https://github.com/mafintosh/), which used timeouts, which cause a lot of issues.

## License

MIT
