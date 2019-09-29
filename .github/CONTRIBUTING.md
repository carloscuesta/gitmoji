# Contributing to updated-gitmoji

Hello!

Thanks for your interest in contributing to [updated-gitmoji](https://github.com/OfficialCRUGG/updated-gitmoji)!

## How to submit a pull request?

1. Fork [this repository](https://github.com/OfficialCRUGG/updated-gitmoji/fork).
2. Make your changes.
3. Commit your changes. Don't forget to add a commit title with an emoji in it.
4. Push your changes.
5. Submit your pull request.

## How to add a gitmoji

1. Open the **gitmojis.json** file located at `src/data/gitmojis.json`.
2. Add your emoji using the following code inside of the `gitmojis array []`:
3. Then, after that you'll need to add a new color to [the vars.scss](https://github.com/OfficialCRUGG/updated-gitmoji/blob/master/src/styles/_includes/_vars.scss) file. You must follow the convention of adding a new item to the `$gitmojis array`. That matches the name that you added at the json file.
4. Save the file and create a pull request.

```json
{
  "emoji": "",
  "entity": "entity (Ex: &#x1F440)",
  "code": ":code:",
  "description": "Enter the description for the gitmoji.",
  "name": "code (same as code but without ':' replace underscores for dashes _ => - )"
}
```
If you want to find the hexadecimal entity of icon, search for it in this site: <a>http://graphemica.com/</a>

## How to start gitmoji and update

If you want to make changes to the site, follow the next steps:

1. Clone gitmoji

```bash
$ git clone https://github.com/OfficialCRUGG/updated-gitmoji.git
$ cd gitmoji
```

2. Install the dependencies and start the development task.

```bash
$ npm i && gulp
```

3. Make sure the styles are using a link instead of being inlined.

_If you are updating the SCSS files and the styles doesn't get updated, go to the `index.pug` and `about.pug` paste the following code_

```jade
link(href="css/style.css", type="text/css", rel="stylesheet")
```

_Remove this one_

```jade
style
  include ../../dist/css/style.css
```

**After making your changes, inline the styles as before.**

The project is built with [Pug](http://pugjs.org) and [SCSS](http://sass-lang.com)
