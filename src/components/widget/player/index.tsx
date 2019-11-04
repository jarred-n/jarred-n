import React, { Component } from 'react'
import 'aplayer/dist/APlayer.min.css';
import './index.scss';

export default class Player extends Component {
  constructor(props: {}) {
      super(props)
      this.state = {};
  }

  render() {
    return (
      <div id='player'></div>
    )
  }
}
