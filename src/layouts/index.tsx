import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routers from '../Routers'
import Header from '@components/common/header'
import Player from '@components/widget/player'
import ScrollToTop from '@components/widget/scrollToTop'


import '@assets/styles/global.scss';
import { inject, observer } from 'mobx-react';
import { LayoutsProps } from '../types/layout';


@inject('layoutsStore')
@observer
export default class Layouts extends Component<LayoutsProps, {}> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { layoutsStore } = this.props;
    layoutsStore!.getPlayers();
    layoutsStore!.getGlobalStatus();
  }

  render() {
    return (
      <BrowserRouter>
        <Route>
          <div>
            <Header />
            <Routers />
          </div>
          <ScrollToTop />
          <Player />
        </Route>
      </BrowserRouter>
    )
  }
}
