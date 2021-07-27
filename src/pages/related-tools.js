import React from 'react'
import Link from 'next/link'

import CarbonAd from 'src/components/CarbonAd'
import Button from 'src/components/Button'
import SEO from 'src/components/SEO'

const tools: Array<{ name: string, description: string, link: string }> = [
  {
    name: 'gitmoji-changelog',
    description: 'A changelog generator for gitmoji.',
    link: 'https://github.com/frinyvonnick/gitmoji-changelog/',
  },
  {
    name: 'gitmemoji',
    description: 'A game to learn gitmojis.',
    link: 'https://github.com/lalalilo/gitmemoji/',
  },
  {
    name: 'gitmoji-browser-extension',
    description: 'The Gitmoji extension to easily search and copy gitmojis.',
    link: 'https://github.com/johannchopin/gitmoji-browser-extension',
  },
  {
    name: 'gitmoji-vscode',
    description: 'A VSCode extension for your git commit messages',
    link: 'https://github.com/vtrois/gitmoji-vscode',
  },
  {
    name: 'gitmoji-intellij-plugin',
    description:
      'A Jetbrains suite plugin to easily add gitmoji when committing',
    link: 'https://plugins.jetbrains.com/plugin/12383-gitmoji-plus-commit-button',
  },
  {
    name: 'gitmoji-sublimetext',
    description: 'A Sublime Text plugin to add emojis in git commit messages.',
    link: 'https://packagecontrol.io/packages/Gitmoji',
  },
  {
    name: 'gitimoji',
    description: 'A Gitmoji App for macOS.',
    link: 'https://github.com/TimoZacherl/gitimoji',
  },
  {
    name: 'gitmoji-atom',
    description: 'Gitmoji for Atom',
    link: 'https://github.com/ThatXliner/gitmoji-atom',
  },
  {
    name: 'traymoji',
    description: 'A Electron Tray App for Gitmojis',
    link: 'https://github.com/CoenWarmer/traymoji',
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

        <ul>
          {tools.map((tool) => (
            <li key={tool.name}>
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                <b>{tool.name}</b>
              </a>
              {`: ${tool.description}`}
            </li>
          ))}
        </ul>
      </section>
    </main>
  </>
)

export default RelatedTools
