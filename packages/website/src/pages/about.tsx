import Link from 'next/link'

import CarbonAd from 'src/components/CarbonAd'
import Button from 'src/components/Button'
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

        <div>
          <Button
            icon="twitter"
            link={
              'https://twitter.com/intent/tweet?text=gitmoji' +
              '%20%E2%80%93%20An%20%23emoji%20guide%20for%20your%20commit' +
              '%20messages%20by%20%40crloscuesta%20%F0%9F%98%8D%F0%9F%98%9C' +
              '&url=https://gitmoji.dev'
            }
            target="_blank"
            text="Tweet"
          />
        </div>
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
        <h1>Example of usage</h1>

        <p>
          In case you need some ideas to integrate gitmoji in your project,
          here&#39;s a practical way to use it:
        </p>

        <ul>
          <li>
            <b>intention</b>: An emoji from the list.
          </li>
          <li>
            <b>scope</b>: An optional string that adds contextual information
            for the scope of the change.
          </li>
          <li>
            <b>message</b>: A brief explanation of the change.
          </li>
        </ul>

        <pre>
          <code>&lt;intention&gt; [scope?][:?] &lt;message&gt;</code>
        </pre>
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
