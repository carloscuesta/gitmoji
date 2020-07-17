<p align="center">
	<a href="https://gitmoji.carloscuesta.me">
		<img src="https://cloud.githubusercontent.com/assets/7629661/20073135/4e3db2c2-a52b-11e6-85e1-661a8212045a.gif" width="456" alt="gitmoji">
	</a>
</p>
<p align="center">
	<a href="https://travis-ci.com/carloscuesta/gitmoji">
		<img src="https://img.shields.io/travis/com/carloscuesta/gitmoji?style=flat-square"
			 alt="Build Status">
	</a>
	<a href="https://gitmoji.carloscuesta.me">
		<img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
			 alt="Gitmoji">
	</a>
</p>

## About

[Gitmoji](https://gitmoji.carloscuesta.me) is an initiative to standardize and explain **the use of emojis on GitHub commit messages**.

**Using emojis** on **commit messages** provides an **easy way** of **identifying the purpose or intention of a commit** with only looking at the emojis used. As there are a lot of different emojis I found the need of creating a guide that can help to use emojis easier.

The gitmojis are published on the [following package](https://www.npmjs.com/package/gitmojis) in order to be used as a dependency 📦.

## Using [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli)

To use gitmojis from your command line install [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli). A gitmoji interactive client for using emojis on commit messages.

```bash
npm i -g gitmoji-cli
```

## Related tools

- [`gitmoji-changelog`](https://github.com/frinyvonnick/gitmoji-changelog/): A changelog generator for gitmoji.
- [`gitmemoji`](https://github.com/lalalilo/gitmemoji/): A game to learn gitmojis.
- [`gitmoji-browser-extension`](https://github.com/johannchopin/gitmoji-browser-extension): The Gitmoji extension to easily search and copy gitmojis 😜

## Contributing to gitmoji

Contributing to gitmoji is a piece of :cake:, read the [contributing guidelines](https://github.com/carloscuesta/gitmoji/blob/master/.github/CONTRIBUTING.md). You can discuss emojis using the [issues section](https://github.com/carloscuesta/gitmoji/issues/new). To add a new emoji to the list create an issue and send a pull request, see [how to send a pull request and add a gitmoji](https://github.com/carloscuesta/gitmoji/blob/master/.github/CONTRIBUTING.md#how-to-add-a-gitmoji).

### Quickly get started with the gitmoji Docker image 🐳

Building the Docker image is simple. Run the following command to create a locally available Docker image named `gitmoji`:

`docker build -t gitmoji .`

Once the Docker image is build, we can run it (thus creating a container) with the following command:

`docker run -d -p 3000:80 gitmoji`

The `-d` option is telling the container to run in [detached mode](https://www.freecodecamp.org/news/docker-detached-mode-explained), meaning it'll run in the background. The opposite of `-d` is `-it` which displays output from the container in the shell.

The `-p` option maps a port on the host machine to a port in the container. The gitmoji container is an `nginx` web server serving the website on port 80. So, the above command will have http://localhost:3000 serve the site.

#### Want to get the prebuilt Docker image?

To deploy the preexisting Docker image run `docker run -d -p 3000:80 yardenshoham/gitmoji` and go to http://localhost:3000.




## Spread the word

Are you using Gitmoji on your project? Set the Gitmoji badge on top of your readme using this code:

```html
<a href="https://gitmoji.carloscuesta.me">
  <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
</a>
```

## License

The code is available under the [MIT](https://github.com/carloscuesta/gitmoji/blob/master/LICENSE) license.
