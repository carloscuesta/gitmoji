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

[Gitmoji](https://gitmoji.dev) is an initiative to standardize and explain **the use of emojis on GitHub commit messages**.

**Using emojis** on **commit messages** provides an **easy way** of **identifying the purpose or intention of a commit** with only looking at the emojis used. As there are a lot of different emojis I found the need of creating a guide that can help to use emojis easier.

The gitmojis are published on the [following package](https://www.npmjs.com/package/gitmojis) in order to be used as a dependency 📦.

## Using [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli)

To use gitmojis from your command line install [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli). A gitmoji interactive client for using emojis on commit messages.

```bash
npm i -g gitmoji-cli
```

## Using [gitmoji-ai](https://github.com/Lendable/gitmoji-ai)

With [gitmoji-ai](https://github.com/Lendable/gitmoji-ai), let ChatGPT choose the perfect gitmoji for you and add it to your commit message - all with zero effort! Thanks to its smart integration with a git hook, it's fully automated - install and forget. The only requirement is valid OpenAI API key.

## Example of usage

In case you need some ideas to integrate gitmoji in your project, here's a practical way to use it:

```
<intention> [scope?][:?] <message>
```

- `intention`: An emoji from the list.
- `scope`: An optional string that adds contextual information for the scope of the change.
- `message:` A brief explanation of the change.

## Contributing to gitmoji

Contributing to gitmoji is a piece of :cake:, read the [contributing guidelines](https://github.com/carloscuesta/gitmoji/blob/master/.github/CONTRIBUTING.md). You can discuss emojis using the [issues section](https://github.com/carloscuesta/gitmoji/issues/new). To add a new emoji to the list create an issue and send a pull request, see [how to send a pull request and add a gitmoji](https://github.com/carloscuesta/gitmoji/blob/master/.github/CONTRIBUTING.md#how-to-add-a-gitmoji).

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

## License

The code is available under the [MIT](https://github.com/carloscuesta/gitmoji/blob/master/LICENSE) license.
