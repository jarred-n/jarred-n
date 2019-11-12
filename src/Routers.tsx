import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import Loading from '@components/common/loading';
import routePath from '@constants/routePath';

const Home = lazy(() => import('./pages/home'));
const Blog = lazy(() => import('./pages/blog'));

export default class Routers extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <Suspense fallback={<Loading />}>
        <Switch>
            <Route path={routePath.home} exact render={() =><Home />} />
            <Route
              path={routePath.blog}
              render={props => <Blog {...props}/>}
            />
        </Switch>
    </Suspense>
    )
  }
}
