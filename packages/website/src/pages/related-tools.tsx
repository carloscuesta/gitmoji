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
				name: 'traymoji',
				description: 'A Electron Tray App for Gitmojis',
				link: 'https://github.com/CoenWarmer/traymoji',
			},
			{
				name: 'gitmojiapp',
				description: 'A Flutter Gitmoji App for macOS, Linux, and Windows',
				link: 'https://github.com/patrick-fu/GitmojiApp',
			},
		],
	},
	{
		emoji: '🏭',
		title: 'Automatic generators',
		items: [
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
				name: 'genmoji',
				description: 'Gitmoji commit message generation using AI',
				link: 'https://github.com/segersniels/genmoji',
			},
		],
	},
	{
		emoji: '🌐',
		title: 'Browser extensions',
		items: [
			{
				name: 'gitmoji-browser-extension',
				description: 'The Gitmoji extension to easily search and copy gitmojis',
				link: 'https://github.com/johannchopin/gitmoji-browser-extension',
			},
			{
				name: 'githubmoji',
				description:
				'A Firefox addon that adds a predictive gitmoji picker to GitHub commit message inputs',
				link: 'https://github.com/ma1ted/githubmoji',
			},
		],
	},
	{
		emoji: '🧑‍💻',
		title: 'Editors and IDEs',
		items: [
			{
				name: 'gitmoji-vscode',
				description: 'Gitmoji tool for git commit messages in VS Code',
				link: 'https://github.com/seatonjiang/gitmoji-vscode',
			},
			{
				name: 'gitmoji-intellij-plugin',
				description: 'A Jetbrains suite plugin to easily add gitmoji when committing',
				link: 'https://plugins.jetbrains.com/plugin/12383-gitmoji-plus-commit-button',
			},
			{
				name: 'gitmoji-sublimetext',
				description: 'A Sublime Text plugin to add emojis in git commit messages',
				link: 'https://packagecontrol.io/packages/Gitmoji',
			},
			{
				name: 'gitmoji-atom',
				description: 'Gitmoji for Atom',
				link: 'https://github.com/ThatXliner/gitmoji-atom',
			},
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
				name: 'gitmemoji',
				description: 'A game to learn gitmojis',
				link: 'https://github.com/ImBIOS/gitmemoji/',
			},
		],
	},
	{
		emoji: '🔍',
		title: 'Regular expressions',
		items: [
			{
				name: 'gitmoji-regex',
				description: 'A Gitmoji::Regex for Ruby',
				link: 'https://github.com/pboling/gitmoji-regex',
			},
		],
	},
]

const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

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
				{shuffle(tools).map((section) => (
					<>
						<h2>{section.emoji} {section.title}</h2>
						<ul>
							{shuffle(section.items).map((tool) => (
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
