import React, { Component } from 'react'
import Routers from '../Routers'
import Header from '@components/common/header'

export default class Layouts extends Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    //   <AutoBackToTop>
        <div>
            <Header />
            <Routers />
        </div>
        
    //   </AutoBackToTop>
    )
  }
}
