import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cs from 'classnames'
import routePath from '@constants/routePath'
import { svgSprite } from '@constants/constants'

import styles from './index.scss'

const headerList = {
  home: {
    url: routePath.home,
    icon: svgSprite.home
  }
}
export default class Header extends Component {
  render() {
    return (
      <header className={cs(styles.header)}>
          <Link to={routePath.home}>Jarred-n Home</Link>
          <nav>
            <ul>
                {Object.keys(headerList).map(key => (
                  <li>
                    <Link to='/'>
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
