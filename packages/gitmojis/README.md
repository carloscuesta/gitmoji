<p align="center">
	<a href="https://gitmoji.dev">
		<img src="https://cloud.githubusercontent.com/assets/7629661/20073135/4e3db2c2-a52b-11e6-85e1-661a8212045a.gif" width="456" alt="gitmoji">
	</a>
</p>
<p align="center">
	<a href="https://github.com/carloscuesta/gitmoji/actions?query=workflow%3ACI+branch%3Amaster">
		<img src="https://img.shields.io/github/actions/workflow/status/carloscuesta/gitmoji/ci.yml?branch=master&style=flat-square"
			 alt="Build Status">
	</a>
	<a href="https://gitmoji.dev">
		<img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
			 alt="Gitmoji">
	</a>
</p>

## About

The emojis from the [gitmoji](https://gitmoji.dev) convention **bundled** into a **node module**.

## Install

```bash
npm i gitmojis
```

## Usage

```js
import { gitmojis } from 'gitmojis'

console.log(gitmojis)

/*
[
  {
    emoji: '🎨',
    entity: '&#x1f3a8;',
    code: ':art:',
    description: 'Improve structure / format of the code.',
    name: 'art',
    semver: null
  },
  {
    emoji: '⚡️',
    entity: '&#x26a1;',
    code: ':zap:',
    description: 'Improve performance.',
    name: 'zap',
    semver: null
  },
  ...
]
*/
```

## API

Alternatively you can also consume this as through HTTP using the API:
  
```bash
curl https://gitmoji.dev/api/gitmojis
```

## Spread the word

Are you using Gitmoji on your project? Set the Gitmoji badge on top of your readme using this code:

```html
<a href="https://gitmoji.dev">
  <img
    src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
    alt="Gitmoji"
  />
</a>
```
