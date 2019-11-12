import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { ArticleProps } from '../../types/article';
import cs from 'classnames'
import history from '../../history';
import Title from '@components/common/title'
import styles from './index.module.scss';
import { webpSuffix, blogBg } from '../../constants/constants';


@inject('articleStore')
@observer
export default class Blog extends Component<ArticleProps, {}> {

  constructor(props: ArticleProps) {
      super(props);
      this.state = {};
  }

  componentDidMount() {
    const { articleStore }  = this.props;
    // if(history.location.pathname.includes('t')) {
    //     articleStore!.getPostsByTag();
    // }else if(history.location.pathname.includes('blog')) {
    //     articleStore!.getPostsByPage(1);
    // }
    // articleStore!.getAllTags();
    // articleStore!.getHots();
  }
    
  render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.getItem('isWebp') === 'true';
    return (
      <main>
        <Title title='blog' />
        <figure
            className={cs(styles.bg_header, 'no-user-select')}
            style={{
                backgroundImage: `url(${isWebp? `${blogBg}${webpSuffix}` : blogBg })`
            }}
        >
            <span>Tech, Travel and Life</span>
        </figure>
      </main>
    )
  }
}
