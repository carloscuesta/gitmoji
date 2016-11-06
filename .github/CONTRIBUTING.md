# Contributing to gitmoji

Hello!

Thanks for for contributing on [gitmoji](https://github.com/carloscuesta/gitmoji). Before implementing new features and changes, feel free to [submit an issue](https://github.com/carloscuesta/gitmoji/issues/new). We're going to talk here :stuck_out_tongue_winking_eye:.

If you would like to add a new emoji to gitmoji, fill the provided `ISSUE_TEMPLATE` when creating an issue and take a look at the contributing section.

## How to submit a pull request?

1. Fork [this repository](https://github.com/carloscuesta/gitmoji/issues/new).
2. Create a new branch with the feature name. (Eg: add-emoji-deploy, fix-website-header)
3. Make your changes.
4. Commit your changes. Don't forget to add a commit title with an emoji and a description.
5. Push your changes.
6. Submit your pull request.

## How to add a gitmoji

1. Open the **gitmoji.json** file located at `src/data/gitmojis.json`.
2. Add your emoji using the following code inside of the `gitmojis array []`:
3. Save the file and create a pull request.

```json
{
	"emoji": "",
	"entity": "emoji hexadecimal html entity",
	"code": ":code:",
	"description": "Enter the description for the gitmoji.",
	"name": "code (same as code but without ':' replace underscores for dashes _ => - )"
}
```
