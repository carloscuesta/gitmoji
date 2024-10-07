import CarbonAd from 'src/components/CarbonAd'
import SEO from 'src/components/SEO'

const tools = [
	{
		emoji: '📦',
		title: 'Apps',
		items: [
			{
				name: 'gitimoji',
				description: 'A Gitmoji App for macOS',
				link: 'https://github.com/TimoZacherl/gitimoji',
			},
			{
				name: 'gitmojiapp',
				description: 'A Flutter Gitmoji App for macOS, Linux, and Windows',
				link: 'https://github.com/patrick-fu/GitmojiApp',
			},
			{
				name: 'gitmojiBar',
				description: 'MacOS menubar for easy copy gitmoji',
				link: 'https://github.com/techinpark/gitmojiBar',
			},
			{
				name: 'traymoji',
				description: 'A Electron Tray App for Gitmojis',
				link: 'https://github.com/CoenWarmer/traymoji',
			},
		],
	},
	{
		emoji: '🏭',
		title: 'Automatic generators',
		items: [
			{
				name: 'genmoji',
				description: 'Gitmoji commit message generation using AI',
				link: 'https://github.com/segersniels/genmoji',
			},
			{
				name: 'gitmoji-changelog',
				description: 'A changelog generator for gitmoji',
				link: 'https://github.com/frinyvonnick/gitmoji-changelog/',
			},
			{
				name: 'gitmoji-changelog-action',
				description: 'GitHub Action for gitmoji-changelog',
				link: 'https://github.com/sercanuste/gitmoji-changelog-action',
			},
			{
				name: 'gitmoji-semver',
				description: 'Just commit with gitmoji, and you’ll get auto versioning by semantic versioning and auto release to github',
				link: 'https://github.com/nkmr-jp/gitmoji-semver',
			},
		],
	},
	{
		emoji: '🌐',
		title: 'Browser extensions',
		items: [
			{
				name: 'githubmoji',
				description: 'A Firefox addon that adds a predictive gitmoji picker to GitHub commit message inputs',
				link: 'https://addons.mozilla.org/firefox/addon/githubmoji',
			},
			{
				name: 'gitmoji-browser-extension',
				description: 'The Gitmoji extension to easily search and copy gitmojis',
				link: 'https://github.com/johannchopin/gitmoji-browser-extension',
			},
		],
	},
	{
		emoji: '🧑‍💻',
		title: 'Editors and IDEs',
		items: [
			{
				name: 'gitmoji-atom',
				description: 'Gitmoji for Atom',
				link: 'https://github.com/ThatXliner/gitmoji-atom',
			},
			{
				name: 'Gitmoji Commit',
				description: 'VS Code extension for composing Gitmoji commit messages',
				link: 'https://github.com/benjaminadk/emojigit',
			},
			{
				name: 'gitmoji-intellij-plugin',
				description: 'A Jetbrains suite plugin to easily add gitmoji when committing',
				link: 'https://plugins.jetbrains.com/plugin/12383-gitmoji-plus-commit-button',
			},
			{
				name: 'gitmoji.nvim',
				description: 'Gitmojis for Neovim using nvim-cmp',
				link: 'https://github.com/Dynge/gitmoji.nvim',
			},
			{
				name: 'gitmoji-sublimetext',
				description: 'A Sublime Text plugin to add emojis in git commit messages',
				link: 'https://packagecontrol.io/packages/Gitmoji',
			},
			{
				name: 'gitmoji-vscode',
				description: 'Gitmoji tool for git commit messages in VS Code',
				link: 'https://github.com/seatonjiang/gitmoji-vscode',
			},
			{
				name: 'Neo gitmoji',
				description: 'Telescope integration for gitmoji (NeoVim)',
				link: 'https:https://github.com/HenriqueArtur/neo-gitmoji.nvim/',
			},
			{
				name: 'telescope-gitmoji.nvim',
				description: 'A Telescope integration of gitmoji (Neovim)',
				link: 'https://github.com/olacin/telescope-gitmoji.nvim',
			}
		],
	},
	{
		emoji: '🪝',
		title: 'Git hooks',
		items: [
			{
				name: 'gitmoji-fuzzy-hook',
				description:
				'Fuzzy finder git-commit-hook for prepending a gitmoji (cmd & GUI)',
				link: 'https://gitlab.com/raabf/gitmoji-fuzzy-hook',
			},
		],
	},
	{
		emoji: '🚀',
		title: 'Launchers',
		items: [
			{
				name: 'alfred-gitmoji',
				description: 'Gitmoji Workflow for Alfred',
				link: 'https://github.com/techouse/alfred-gitmoji',
			},
			{
				name: 'raycast-gitmoji-search',
				description: 'Gitmoji extension for Raycast',
				link: 'https://www.raycast.com/ricoberger/gitmoji',
			},
		],
	},
	{
		emoji: '🧠',
		title: 'Learn',
		items: [
			{
				name: 'Anki deck',
				description: 'Learn gitmojis using Anki, a spaced repetition software',
				link: 'https://ankiweb.net/shared/info/813391103',
			},
			{
				name: 'gitmemoji',
				description: 'A game to learn gitmojis',
				link: 'https://github.com/ImBIOS/gitmemoji/',
			},
		],
	},
	{
		emoji: '🧰',
		title: 'Programming language integration',
		items: [
			{
				name: 'convert-gitmoji',
				description: 'Simple way to replace strings with gitmojis in TypeScript',
				link: 'https://github.com/Intevel/convert-gitmoji',
			},
			{
				name: 'gitmoji-regex',
				description: 'A Gitmoji::Regex for Ruby',
				link: 'https://github.com/pboling/gitmoji-regex',
			},
		],
	},
]

const RelatedTools = () => (
  <>
    <SEO pageTitle="Related tools" pageUrl="/related-tools" />
    <main>
      <CarbonAd />
      <section>
        <h1>Related tools</h1>

        <p>
          This is a list of tools which are related with the <b>gitmoji</b>{' '}
          convention.
        </p>
				{tools.map((section) => (
					<>
						<h2>{section.emoji} {section.title}</h2>
						<ul>
							{section.items.map((tool) => (
								<li key={tool.name} >
									<a href={tool.link} target="_blank" rel="noopener noreferrer">
										<b>{tool.name}</b>
									</a>
									{`: ${tool.description}`}
								</li>
							))}
						</ul>
					</>
				))}
      </section>
    </main>
  </>
)

export default RelatedTools
