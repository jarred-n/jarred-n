import React, { Component } from 'react'
import Helmet from 'react-helmet'

export interface TitleProps {
    title: string;
}

export default class Title extends Component<TitleProps, {}> {

  constructor(props: TitleProps) {
      super(props);
      this.state = {};
  }


  render() {

    const { title } = this.props;

    return (
      <Helmet>
          <title> {title} | Jarred-n Inc. </title>
      </Helmet>
    )
  }
}
