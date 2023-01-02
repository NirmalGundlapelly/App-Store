// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemsList, onClickTab, isActive} = props
  const {tabId, displayText} = tabItemsList

  const activeClassText = isActive ? 'activeButton' : ''

  const onClickButton = () => {
    onClickTab(tabId)
  }

  return (
    <li className="tabListItem">
      <button
        onClick={onClickButton}
        type="button"
        className={`tabButtons ${activeClassText}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
