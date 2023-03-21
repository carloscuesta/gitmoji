import Link from 'next/link'

import CarbonAd from 'src/components/CarbonAd'
import SEO from 'src/components/SEO'

const Specification = () => (
  <>
    <SEO pageTitle="Specification" pageUrl="/about" />
    <main>
      <CarbonAd />
      <section>
        <h1 id="specification">Specification</h1>

        <p>
          You can extend Gitmoji and make it your own, but in case you want to
          follow the official specification, please continue reading 👀
        </p>

        <p>
          A gitmoji commit message consists is composed using the following
          pieces:
        </p>

        <ul>
          <li>
            <b>intention</b>: The intention you want to express with the commit,
            using an emoji from the <Link href="/">list</Link>. Either in the
            :shortcode: or unicode format.
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
        <h1 id="specification-examples">Examples</h1>

        <ul>
          <li>⚡️ Lazyload home screen images.</li>
          <li>🐛 Fix `onClick` event handler</li>
          <li>🔖 Bump version `1.2.0`</li>
          <li>♻️ (components): Transform classes to hooks</li>
          <li>📈 Add analytics to the dashboard</li>
          <li>🌐 Support Japanese language</li>
          <li>♿️ (account): Improve modals a11y</li>
        </ul>
      </section>

      <section>
        <h1 id="shortcode-vs-unicode-format">Shortcode vs Unicode format</h1>

        <p>
          You&#39;ll notice that when using emojis in commits, it&#39;s possible
          to use either the shortcode or the unicode format.
        </p>

        <p>
          The difference between both is that the unicode represents the emoji
          itself while the shortcode is a text representation of the emoji that
          will be converted to the unicode character when rendered on a Git
          platform, such as GitHub, GitLab etc.
        </p>

        <p>
          Both approaches are completely fine, you can choose the one you&#39;re
          most comfortable and suits you best. Let&#39;s understand the pros and
          cons of each approach so you can decide on it:
        </p>

        <h2>Unicode</h2>

        <h3>Pros ✅</h3>

        <ul>
          <li>
            It represents the actual emoji no external systems are needed.
          </li>
          <li>Better git log.</li>
          <li>Easier to type.</li>
          <li>Takes less characters of the commit title.</li>
        </ul>

        <h3>Cons ❌</h3>
        <ul>
          <li>Might not be supported in all terminals / operating systems.</li>
        </ul>

        <h2>Shortcode</h2>
        <h3>Pros ✅</h3>
        <ul>
          <li>
            Supported everywhere as it&#39;s a text representation of the emoji.
          </li>
        </ul>
        <h3>Cons ❌</h3>
        <ul>
          <li>
            You&#39;ll need a platform / system that knows how to properly
            render the shortcode.
          </li>
          <li>
            Different platforms / systems might use different shortcode namings,
            eg: GitHub and GitLab have some differences.
          </li>
          <li>Takes more characters of the commit title.</li>
        </ul>
      </section>
    </main>
  </>
)

export default Specification
