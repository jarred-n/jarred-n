import React, { Component } from 'react'
import { HomeProps } from '../../types/home';
import Title from '@components/common/title';
import styles from './index.module.scss';

 class Home extends Component<HomeProps, {}> {

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { homeStore, articleStore } = this.props;
    const isWebp = window.localStorage.getItem('isWebp') === 'true';

    
  }

  render() {
    const { homeStore } = this.props;
    const isWebp = window.localStorage.getItem('isWebp') === 'true';

    return (
      <main className={styles.blog_home}>
        <Title title="jarred-n Home Blog" />
        <section id='background' className={styles.ad_wrapper} />
        
      </main>
    )
  }
}
export default Home;