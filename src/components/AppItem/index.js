// Write your code here
import './index.css'

const AppItem = props => {
  const {appListItems} = props
  const {appId, appName, imageUrl, category} = appListItems

  return (
    <li className="appItem">
      <img alt={appName} className="appLogo" src={imageUrl} />
      <p className="appNames">{appName}</p>
    </li>
  )
}

export default AppItem
