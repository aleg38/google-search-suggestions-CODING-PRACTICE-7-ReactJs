// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onDeleteSearch = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {suggestionsList} = this.props
    const resultSearch = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
          alt="google logo"
        />
        <div className="search-card-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              value={searchInput}
              className="input-box"
              placeholder="Search Google"
              onChange={this.onChangeSearchValue}
            />
          </div>
          <ul className="list-items-container">
            {resultSearch.map(eachLine => (
              <SuggestionItem
                searchDetails={eachLine}
                key={eachLine.id}
                onDeleteSearch={this.onDeleteSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
