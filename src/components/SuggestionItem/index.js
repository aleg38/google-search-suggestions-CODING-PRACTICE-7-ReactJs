// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchDetails, onDeleteSearch} = props
  const {suggestion} = searchDetails

  const onDeleteicon = () => {
    onDeleteSearch(suggestion)
  }

  return (
    <li className="list-item">
      <p className="text">{suggestion}</p>
      <button onClick={onDeleteicon}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
