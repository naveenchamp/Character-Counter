import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    viewState: true,
    updatedList: [],
    currentInput: '',
  }

  onDirect = event => {
    this.setState({currentInput: event.target.value})
  }

  onAddData = event => {
    event.preventDefault() // required for form submission

    const {currentInput} = this.state
    if (currentInput.trim() === '') return

    const newItem = {
      id: uuidv4(),
      text: currentInput,
    }

    this.setState(prevState => ({
      updatedList: [...prevState.updatedList, newItem],
      viewState: false,
      currentInput: '',
    }))
  }

  render() {
    const {viewState, updatedList, currentInput} = this.state

    return (
      <div className="main-container">
        <div className="left-container">
          <h1>Count the characters like a Boss..</h1>

          <div className="display-box">
            {viewState ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="empty-img"
              />
            ) : (
              <ul>
                {updatedList.map(eachItem => (
                  <li key={eachItem.id}>
                    <p>
                      {eachItem.text} : {eachItem.text.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="right-container">
          <h1>Character Counter</h1>

          {/* Form required for tests */}
          <form className="input-box" onSubmit={this.onAddData}>
            <input
              type="text"
              value={currentInput}
              onChange={this.onDirect}
              placeholder="Enter the characters here"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
