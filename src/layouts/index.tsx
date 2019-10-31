import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routers from '../Routers'
import Header from '@components/common/header'

export default class Layouts extends Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>
        <Route>
          <div>
            <Header />
            <Routers />
          </div>
        </Route>
      </BrowserRouter>
    )
  }
}
