import React, { Component } from 'react'
import { noop } from '@tools/tools'
import _ from 'lodash'
import styles from './index.module.scss'

export default class ScrollToTop extends Component<{}, {}> {
  private backToTop = React.createRef<HTMLDivElement>()
  constructor(props: {}) {
    super(props)
    this.state = {}
    this.backToTop = React.createRef()
  }

  componentDidMount() {
    this.handlePosition()
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', noop);
  }


  handlePosition = () => {
    const backToTop = this.backToTop.current
    if (backToTop) {
      window.addEventListener(
        'scroll',
        _.throttle(() => {
          const tops =
            document.documentElement.scrollTop || document.body.scrollTop
          if (tops > 800) {
            backToTop.style.top = '-10rem'
          } else {
            backToTop.style.top = '-60rem'
          }
        }, 150)
      )
    }
  }

  /**
   * 界面缓和地滚动到顶部
   * @memberof ScrollToTop
   */
  public scrollToTop = () => {
    let timer: number = 0;
    cancelAnimationFrame(timer);
    const startTime = +new Date();
    const b = document.body.scrollTop || document.documentElement.scrollTop;
    const d = 500;
    const c = b;
    timer = requestAnimationFrame(function func() {
      const t = d - Math.max(0, startTime - +new Date() + d);
      document.documentElement.scrollTop = document.body.scrollTop =
        (t * -c) / d + b;
      timer = requestAnimationFrame(func);
      if (t === d) {
        cancelAnimationFrame(timer);
      }
    });
  };


  render() {
    return (
      <div
        className={styles.back_to_top}
        onClick={this.scrollToTop}
        ref={this.backToTop}
      />
    )
  }
}
