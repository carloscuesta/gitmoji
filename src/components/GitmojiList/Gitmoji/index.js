import React from 'react'

type Props = {
  code: string,
  description: string,
  emoji: string,
  name: string
}

const Gitmoji = (props: Props) => (
  <article className="emoji col-xs-12 col-sm-6 col-md-3">
    <div className="emoji-card">
      <header className={`${props.name} emoji-header`}>
        <span className="emoji-icon gitmoji" data-clipboard-text={props.code}>
          {props.emoji}
        </span>
      </header>
      <div className="emoji-info">
        <code>{props.code}</code>
        <p>{props.description}</p>
      </div>
    </div>
  </article>
)

export default Gitmoji
