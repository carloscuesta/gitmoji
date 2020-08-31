# Contributing to gitmoji

Hello!

Thanks for contributing on [gitmoji](https://github.com/carloscuesta/gitmoji). Before implementing new features and changes, feel free to [submit an issue](https://github.com/carloscuesta/gitmoji/issues/new). We're going to talk here :stuck_out_tongue_winking_eye:.

If you would like to add a new emoji to gitmoji, fill the provided `ISSUE_TEMPLATE` when creating an issue and take a look at the contributing section.

## How to submit a pull request?

1. Fork [this repository](https://github.com/carloscuesta/gitmoji/fork).
2. Create a new branch with the feature name. (Eg: add-emoji-deploy, fix-website-header)
3. Make your changes.
4. Commit your changes. Don't forget to add a commit title with an emoji and a description.
5. Push your changes.
6. Submit your pull request.

## How to add a gitmoji

1. Open the **gitmojis.json** file located at `src/data/gitmojis.json`.
2. Add your emoji using the following code inside of the `gitmojis array []`:
3. Save the file and create a pull request.

```json
{
  "emoji": "",
  "entity": "entity (Ex: &#x1F440)",
  "code": ":code:",
  "description": "Enter the description for the gitmoji. Use present form for verbs.",
  "name": "code (same as code but without ':' replace underscores for dashes _ => - )"
}
```

If you want to find the hexadecimal entity of icon, search for it in this site: <a>http://graphemica.com/</a>

Then, after that you'll need to add a new color to [the vars.scss](https://github.com/carloscuesta/gitmoji/blob/master/src/styles/_includes/_vars.scss) file.

You must follow the convention of adding a new item to the `$gitmojis array`. That matches the name that you added at the json file.

## How to start gitmoji

If you want to make changes to the site, follow the next steps:

1. Clone gitmoji

```bash
$ git clone https://github.com/carloscuesta/gitmoji.git
$ cd gitmoji
```

2. Install the dependencies and start the development task.

```bash
$ yarn install && yarn run dev
```

The project is built with [Next.js](http://nextjs.org) and [SCSS](http://sass-lang.com)
