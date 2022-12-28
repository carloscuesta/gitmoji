import Contributor from './Contributor'

type Props = {
  contributors: Array<{
    avatar: string
    id: string
    url: string
  }>
}

const ContributorsList = (props: Props) => (
  <div className="row center-xs">
    {props.contributors.map((contributor) => (
      <Contributor
        key={contributor.id}
        url={contributor.url}
        avatar={contributor.avatar}
      />
    ))}
  </div>
)

export default ContributorsList
