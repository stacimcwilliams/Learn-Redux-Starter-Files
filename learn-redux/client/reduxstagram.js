// let's go!
import React from 'react';

import {render} from 'react-dom';

//import css
import css from './styles/style.styl';

import Single from './components/Single.js';
import PhotoGrid from './components/PhotoGrid.js';
import App from './components/App.js';
import Raven from 'raven-js'
import { sentry_url} from './data/config'

Raven.config(sentry_url, {
  tags: {
    git_commit: 'asfas9d08f',
    userLevel: 'editor'
  }
}).install();

// logException(new Error('download failed'), {
//   email: 'stacinicole86@gmail.com'
// });

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import store, { history} from './store'

const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
    <IndexRoute component={PhotoGrid}></IndexRoute>
    <Route path="/view/:postId" component={Single}></Route>
  </Route>
</Router>
</Provider>
)
render(router, document.getElementById('root'));
