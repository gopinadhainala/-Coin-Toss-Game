import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {isHead: true, totalCount: 0, headCount: 0, tailCount: 0}

  headCount = () => {
    this.setState(previousCount => ({headCount: previousCount.headCount + 1}))
  }

  tailCount = () => {
    this.setState(previousCount => ({tailCount: previousCount.tailCount + 1}))
  }

  totalCount = () => {
    this.setState(previousCount => ({totalCount: previousCount.totalCount + 1}))
  }

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.totalCount()

    if (tossResult === 0) {
      this.headCount()
      this.setState({isHead: true})
    } else {
      this.tailCount()
      this.setState(previousResult => ({isHead: !previousResult.isHead}))
    }
  }

  render() {
    const {isHead, headCount, tailCount, totalCount} = this.state

    return (
      <div className="coin-toss-container">
        <div className="coin-toss-card">
          <h1 className="game-header">Coin Toss Game</h1>
          <p className="toss-results-para">Heads (or) Tails</p>
          <div className="coin-image-container">
            {isHead ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
                className="result-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
                className="result-image"
              />
            )}
          </div>
          <button
            type="button"
            className="coin-button"
            onClick={this.tossTheCoin}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-para">Total: {totalCount}</p>
            <p className="result-para">Heads: {headCount}</p>
            <p className="tail-para">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
