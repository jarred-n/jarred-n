import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cs from 'classnames'
import _ from 'lodash'
import routePath from '@constants/routePath'
import { svgSprite } from '@constants/constants'
import svgIcons from '@assets/images/blog-svg-icons.svg';

import styles from './index.module.scss'

const headerList = {
  home: {
    url: routePath.home,
    icon: svgSprite.home
  },
  blog: {
    url: routePath.blog,
    icon: svgSprite.blog,
  }
}
export default class Header extends Component<{}, {isTop: boolean}> {

  constructor(props: any) {
    super(props);
    this.state = {
      isTop: true
    }
  }
  
  componentDidMount() {

  }
  
  switchNavbarBackgroundColor() {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if(!top) {
      this.setState({
        isTop: true
      });
    }
    window.addEventListener(
      'scroll',
      _.throttle(() => { // 节流函数
        const _top = document.documentElement.scrollTop || document.body.scrollTop;
        if(!_top) {
          this.setState({
            isTop: true
          });
        } else {
          this.setState({
            isTop: false
          })
        }
      }, 150)
    )
  }

  render() {
    const { isTop } = this.state;

    return (
      <header className={cs(
        styles.header,
        'no-user-select',
        isTop? styles.clear_navbar_bg : ''
        )}>
          <Link className={styles.logo} to={routePath.home}>Jarred-n Home</Link>
          <nav>
            <ul>
                {Object.keys(headerList).map(key => (
                  <li className={styles.nav_item} key={key}>
                    <Link to='/'>
                      <svg className={cs(styles.nav_icon, styles[`icon_${key}`])}>
                        <use xlinkHref={`${svgIcons}${headerList[key].icon}`} />
                      </svg>
                      <span>{key}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
      </header>
    )
  }
}
