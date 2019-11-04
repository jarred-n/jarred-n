import React, { Component } from 'react'
import { ArticleProps } from '../../../types/article';

export default class PostSummary extends Component<ArticleProps, {}> {
  constructor(props:ArticleProps) {
    super(props);
    this.state = {}
  }
  render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.getItem('isWebp') === 'true';
    
    return (
      <div>
        
      </div>
    )
  }
}
