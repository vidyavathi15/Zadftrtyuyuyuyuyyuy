import {Link} from 'react-router-dom'

import './index.css'

const StateItem = props => {
  const {stateDetails} = props
  const {
    name,
    stateCode,
    confirmed,
    active,
    recovered,
    deceased,
    population,
  } = stateDetails

  return (
    <Link to={`/state/${stateCode}`} className="link-item">
      <li className="state-item-details-container">
        <p className="state-name">{name}</p>
        <p className="confirmed-count">{confirmed}</p>
        <p className="active-count">{active}</p>
        <p className="recovered-count">{recovered}</p>
        <p className="deceased-count">{deceased}</p>
        <p className="population-count">{population}</p>
      </li>
    </Link>
  )
}

export default StateItem
