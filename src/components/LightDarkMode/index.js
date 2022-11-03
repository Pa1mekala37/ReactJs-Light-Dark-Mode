// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  changeMode = () => {
    this.setState(prevState => ({
      isLightMode: !prevState.isLightMode,
    }))
  }

  getButtonText = () => {
    const {isLightMode} = this.state

    return isLightMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const buttonText = this.getButtonText()

    const {isLightMode} = this.state

    const modelClassName = isLightMode ? 'lightmode' : 'darkmode'

    const headingClassName = isLightMode ? 'heading-light' : 'heading-dark'

    return (
      <div className="bg-container1">
        <div className={`container ${modelClassName}`}>
          <h1 className={`container ${headingClassName}`}>
            Click to Change Mode
          </h1>
          <button className="btn" type="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
