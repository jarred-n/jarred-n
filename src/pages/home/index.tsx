import React, { Component } from 'react'
import { HomeProps, Project } from '../../types/home';
import { inject, observer } from 'mobx-react';
import Title from '@components/common/title';
import styles from './index.module.scss';
import svgIcons from '@assets/images/blog-svg-icons.svg';
import { svgSprite } from '@constants/constants';
import { webpSuffix } from '../../constants/constants';
import { Link } from 'react-router-dom';
import routePath from '@constants/routePath';
import PostSummary from '@components/post/postSummary/index';

@inject('homeStore')
@inject('articleStore')
@observer
 class Home extends Component<HomeProps, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { homeStore, articleStore } = this.props;
    const isWebp = window.localStorage.getItem('isWebp') === 'true';
    homeStore!.getCover();
    homeStore!.getProject();
    articleStore!.getPostsByPage(1);
    
  }

  render() {
    const { homeStore } = this.props;
    const isWebp = window.localStorage.getItem('isWebp') === 'true';

    return (
      <main className={styles.blog_home}>
        <Title title="jarred-n Home Blog" />
        <section id='background' className={styles.ad_wrapper} />
        <div className={styles.home_slogon}>
          <h1 className={styles.glitch} data-value='HI, JARRED-N！'>
            HI, JARRED-N！
          </h1>
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
              New Release!
            </h2>
            <div className={styles.new_release_container}>
              {homeStore!.projects.map((item, key) => (
                <div className={styles.new_release} key={item._id}>
                  <a href={item.url} target='_blank' ref='noopener noreferer'>
                    <figure className={styles.new_release_content}
                      style={{
                        backgroundImage: `url(${
                          isWebp? `${item.poster}${webpSuffix}` : item.poster
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
                <use xlinkHref={`${svgIcons}${svgSprite.new}`}/>
              </svg>
              The Latest!
            </h2>
            <PostSummary />
          </article>
          <article className={styles.show_more_btn_wrapper}>
            <Link to={{ pathname: routePath.blog, search: '?page=1' }}>
              More
            </Link>
          </article>
        </section>
      </main>
    )
  }
}
export default Home;