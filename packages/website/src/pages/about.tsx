import Link from 'next/link'

import CarbonAd from 'src/components/CarbonAd'
import SEO from 'src/components/SEO'

const About = () => (
  <>
    <SEO pageTitle="About" pageUrl="/about" />
    <main>
      <CarbonAd />
      <section>
        <h1>About</h1>

        <p>
          <strong>Gitmoji is an emoji guide for GitHub commit messages</strong>.
          Aims to be a standarization cheatsheet - guide for using{' '}
          <a href="https://emoji.muan.co">emojis</a> on GitHub&#39;s commit
          messages.
        </p>

        <p>
          <strong>Using emojis</strong> on <strong>commit messages</strong>{' '}
          provides an <strong>easy way</strong> of{' '}
          <strong>identifying the purpose or intention of a commit</strong> with
          only looking at the emojis used. As there are a lot of different
          emojis I found the need of creating a guide that can help to use
          emojis easier.
        </p>

        <p>
          This project is Open Source, that means everyone can participate,
          suggesting, discussing and adding new emojis. Take a look at the{' '}
          <Link href="#contributing-gitmoji">contributing section</Link> and{' '}
          <a href="https://github.com/carloscuesta/gitmoji/blob/master/.github/CONTRIBUTING.md">
            guidelines for contributing
          </a>
          .
        </p>
      </section>

      <section>
        <h1>
          Using gitmoji with{' '}
          <a href="https://github.com/carloscuesta/gitmoji-cli">gitmoji-cli</a>
        </h1>

        <p>
          An easy solution for using gitmoji from your command line, is to
          install{' '}
          <a href="https://github.com/carloscuesta/gitmoji-cli">gitmoji-cli</a>.
          A gitmoji interactive client for using emojis on commit messages.
        </p>

        <pre>
          <code>$ npm i -g gitmoji-cli</code>
        </pre>
      </section>

      <section>
        <h1 id="specification">Specification</h1>

        <p>
          To understand how to use gitmoji properly, please check the official
          specification <Link href="/specification">here</Link> 👈.
        </p>
      </section>

      <section>
        <h1 id="contributing-gitmoji">Contributing to gitmoji</h1>

        <p>
          Contributing to gitmoji is a piece of 🍰! This project is a static
          website built with <i>Next.js</i>. All the gitmojis displayed are
          rendered from a JSON file. Before submitting any pull request, please
          follow these steps:
        </p>

        <ol>
          <li>
            <a href="https://github.com/carloscuesta/gitmoji/issues/new">
              Create an issue
            </a>{' '}
            filling the template.
          </li>
          <li>
            After discussing the idea, feature or suggestion,{' '}
            <a href="https://github.com/carloscuesta/gitmoji/blob/master/.github/CONTRIBUTING.md">
              read the contribution docs.
            </a>
          </li>
          <li>
            <a href="https://github.com/carloscuesta/gitmoji/fork">
              Create a fork{' '}
            </a>
            of gitmoji.
          </li>
          <li>
            Create a new branch with the feature name. (Eg: add-emoji-deploy,
            fix-website-header)
          </li>
          <li>
            Make your changes and send a{' '}
            <a href="https://help.github.com/articles/creating-a-pull-request/">
              pull request{' '}
            </a>
            .
          </li>
        </ol>
      </section>
    </main>
  </>
)

export default About
