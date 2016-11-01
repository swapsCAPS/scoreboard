import React, { Component } from 'react'
import './Player.sass'

class Player extends Component {
  constructor(props) {
    super()

    this.state = {
      points: props.points
    }
  }

  plusOne() {
    this.setState({
      points: this.state.points + 1
    })
  }

  render() {
    const { name, avatar } = this.props
    const { points } = this.state

    return (
      <li className="player">
        <div className="avatar">
          <img src={ avatar } />
        </div>
        <div className="label">
          <span className="score">{ points }</span>
          .&nbsp;
          <span className="name">{ name }</span>
        </div>
        <button onClick={ this.plusOne.bind(this) }>+1</button>
      </li>
    )
  }
}

export default Player