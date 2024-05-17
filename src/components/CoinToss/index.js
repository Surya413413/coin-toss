// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
state = {toss:0,head:0,tails:0,total:0} 




onClickToss = () => {
  const {toss,head,tails,total} = this.state
  const mathResult = Math.floor(Math.random()*2)

  this.setState({toss:mathResult})

  this.setState(prev=>({total:prev.total+1}))

  mathResult===0?(this.setState(prev => ({head:prev.head+1}))):this.setState(prev => ({tails:prev.head+1}))
}

  render() {
    const {toss,head,tails,total} = this.state
    console.log(toss)
    return (
      <div className="background-container">
        <div className="second-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <div>

          {toss===0?<img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            className="coin-img" alt="toss result"
          />: <img
            src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            className="coin-img" alt="toss result"
          />}
          </div>
          <div>
            <button className="button-style" onClick={this.onClickToss}>
              Toss Coin
            </button>
          </div>
          <div className="counting-container">
            <p className="para">Total: {total}</p>
            <p className="para">Heads: {head}</p>
            <p className="para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
