import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { ArticleProps } from '../../types/article';
import Pagination from 'rc-pagination';
import cs from 'classnames'
import history from '../../history';
import Title from '@components/common/title'
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { webpSuffix, blogBg } from '../../constants/constants';
import routePath from '@constants/routePath';
import PostSummary from '@components/post/postSummary/index';


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
        <div className={styles.main_content}>
            <section>
                {
                    !articleStore!.isSummaryLoading && articleStore!.posts.length === 0? 
                    (
                        <div>
                            <p className={styles.no_articles}>暂无发表文章!</p>
                            <Link to={routePath.blog} className={styles.back}>
                                返回
                            </Link>
                        </div>
                    ) : (
                        <PostSummary />
                    )
                }
                {
                    history.location.pathname.includes('blog')? (
                        <Pagination />
                    ) : null
                }
            </section>
        </div>
      </main>
    )
  }
}
