import React, { Component } from 'react'
import { HomeProps, Project } from '../../types/home'
import cs from 'classnames'
import { inject, observer } from 'mobx-react'
import Title from '@components/common/title'
import styles from './index.module.scss'
import svgIcons from '@assets/images/blog-svg-icons.svg'
import { svgSprite } from '@constants/constants'
import { webpSuffix, socialMedia } from '../../constants/constants'
import { Link } from 'react-router-dom'
import routePath from '@constants/routePath'
import PostSummary from '@components/post/postSummary/index'

@inject('homeStore')
@inject('articleStore')
@observer
class Home extends Component<HomeProps, {}> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { homeStore, articleStore } = this.props
    const isWebp = window.localStorage.getItem('isWebp') === 'true'
    homeStore!.getCover()
    homeStore!.getProject()
    articleStore!.getPostsByPage(1)
    homeStore!.getMotto()
    homeStore!.getAnnouncement()
  }

  render() {
    const { homeStore, articleStore } = this.props
    const isWebp = window.localStorage.getItem('isWebp') === 'true'

    return (
      <main className={styles.blog_home}>
        <Title title="jarred-n Home Blog" />
        <section id="background" className={styles.ad_wrapper} />
        <div className={styles.home_slogon}>
          <h1 className={styles.glitch} data-value="HI, JARRED-N！">
            HI, JARRED-N！
          </h1>
          <div className={styles.social_media_container}>
            <div className={styles.up_triangle} />
            <p className={cs(styles.social_media_motto, 'no-user-select')}>
              <svg className={cs(styles.icon, styles.left_quote)}>
                <use xlinkHref={`${svgIcons}${svgSprite.leftQuote}`} />
              </svg>
              <span className={styles.motto_content}>{homeStore!.motto}</span>
              <svg className={cs(styles.icon, styles.right_quote)}>
                <use xlinkHref={`${svgIcons}${svgSprite.rightQuote}`} />
              </svg>
            </p>
            <ul className={styles.social_media_list}>
              <li
                className={styles.social_media_item}
                onClick={() => {
                  homeStore!.getCover('prev')
                }}
              >
                <svg className={styles.arrow}>
                  <use xlinkHref={`${svgIcons}${svgSprite.leftArrow}`} />
                </svg>
              </li>
              {Object.keys(socialMedia).map(key => (
                <li
                  className={cs(
                    styles.social_media_item,
                    key === 'twitter' || key === 'wechat' ? styles.qr_code : '',
                    key === 'twitter' ? styles.twitter_qr_code : '',
                    key === 'wechat' ? styles.wechat_qr_code : ''
                  )}
                  key={key}
                >
                  <a
                    href={socialMedia[key].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className={`icon-${socialMedia[key]}`}>
                      <use xlinkHref={`${svgIcons}${socialMedia[key].icon}`} />
                    </svg>
                  </a>
                </li>
              ))}
              <li
                className={styles.social_media_item}
                onClick={() => {
                  homeStore!.getCover('next')
                }}
              >
                <svg className={styles.arrow}>
                  <use xlinkHref={`${svgIcons}${svgSprite.rightArrow}`} />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        {/* main */}
        <section className={styles.content}>
          {/* announcement */}
          <article className={styles.announcement_wrapper}>
            <svg className={styles.icon}>
              <use xlinkHref={`${svgIcons}${svgSprite.megaphone}`} />
            </svg>
            <span>{homeStore!.announcement}</span>
          </article>
          {/* projects */}
          <article className={styles.new_release_wrapper}>
            <h2 className={styles.new_release_tips}>
              <svg className={styles.icon}>
                <use xlinkHref={`${svgIcons}${svgSprite.fire}`} />
              </svg>
              近期旅行!
            </h2>
            <div className={styles.new_release_container}>
              {homeStore!.projects.map((item, key) => (
                <div className={styles.new_release} key={item._id}>
                  <a href={item.url} target="_blank" ref="noopener noreferer">
                    <figure
                      className={styles.new_release_content}
                      style={{
                        backgroundImage: `url(${
                          isWebp ? `${item.poster}${webpSuffix}` : item.poster
                        })`
                      }}
                      data-title={item.title}
                      data-intro={item.introduction}
                    >
                      <div className={styles.overlay}></div>
                    </figure>
                  </a>
                </div>
              ))}
            </div>
          </article>
          {/* new post summary */}
          <article className={styles.blog_summary_wrapper}>
            <h2 className={styles.blog_summary_tips}>
              <svg className={styles.icon}>
                <use xlinkHref={`${svgIcons}${svgSprite.new}`} />
              </svg>
              文章列表!
            </h2>
            <PostSummary />
          </article>
          {articleStore!.posts.length ? (
            <article className={styles.show_more_btn_wrapper}>
              <Link to={{ pathname: routePath.blog, search: '?page=1' }}>
                More
              </Link>
            </article>
          ) : (
            ''
          )}
        </section>
      </main>
    )
  }
}
export default Home
