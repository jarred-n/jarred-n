import React, { Component } from 'react'
import { ArticleProps, ArticleDetail } from '../../../types/article'
import Skeletons from '../../skeletons/blogSummary'
import cs from 'classnames'
import {
  LazyLoadImage,
  trackWindowScroll
} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import routePath from '@constants/routePath'
import { formatJSONDate } from '@tools/tools'
import svgIcons from '@assets/images/blog-svg-icons.svg'
import { webpSuffix, svgSprite } from '@constants/constants'

@inject('articleStore')
@observer
class PostSummary extends Component<ArticleProps, {}> {
  constructor(props: ArticleProps) {
    super(props)
    this.state = {}
  }
  render() {
    const { articleStore } = this.props
    const isWebp = window.localStorage.getItem('isWebp') === 'true'
    return (
      <>
        {articleStore!.isSummaryLoading ? (
          <Skeletons />
        ) : articleStore!.posts.length ? (
          articleStore!.posts.map((post: ArticleDetail, key: number) => (
            <article
              className={cs(
                styles.blog_summary_content,
                key % 2 === 0 ? styles.reverse : ''
              )}
              key={post._id}
            >
              <div className={styles.blog_thumb_wrapper}>
                <Link to={`${routePath.blogDetail}${post._id}`}>
                  <figure className={styles.blog_thumb}>
                    <LazyLoadImage
                      className={styles.img}
                      alt={post.title}
                      width="100%"
                      height="100%"
                      effect="blur"
                      src={
                        isWebp
                          ? `${post.header_cover}${webpSuffix}`
                          : post.header_cover
                      }
                    />
                  </figure>
                </Link>
              </div>
              <div className={styles.blog_info}>
                <p className={styles.publish_date}>
                  <svg>
                    <use xlinkHref={`${svgIcons}${svgSprite.time}`} />
                  </svg>
                  Released {formatJSONDate(post.publish_date)}
                </p>
                <Link to={`${routePath.blogDetail}${post._id}`}>
                  <h3 className={styles.title}>{post.title}</h3>
                </Link>
                <div className={styles.extra_info}>
                  <span>
                    <svg>
                      <use xlinkHref={`${svgIcons}${svgSprite.eye}`} />
                    </svg>
                    {post.pv_count} PV
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${svgIcons}${svgSprite.comments1}`} />
                    </svg>
                    <Link to={`${routePath.blogDetail}${post._id}`}>
                      {post.like_count.length}{' '}
                      {post.like_count.length > 1 ? 'Likes' : 'Like'}
                    </Link>
                  </span>
                  <span className={styles.category}>
                    <svg>
                      <use xlinkHref={`${svgIcons}${svgSprite.closeFolder}`} />
                    </svg>
                    <Link to={`${routePath.tag}${post.tags[0]}`}>
                      {post.tags[0]}
                    </Link>
                  </span>
                </div>
                <p className={styles.summary_content}>{post.summary}</p>
                <div className={styles.show_detail_wrapper}>
                  <Link to={`${routePath.blogDetail}${post._id}`}>
                    <svg className={styles.icon_more}>
                      <use xlinkHref={`${svgIcons}${svgSprite.more}`} />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className={styles.no_data_tip}>暂无发表文章!</p>
        )}
      </>
    )
  }
}

export default trackWindowScroll(PostSummary)
