import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';
import {Route, Redirect, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import InboxScene from './InboxScene';
import MailScene from './MailScene';
import reducer from '../reducers/index';
import api from '../middlewares/api';

const history = createBrowserHistory();
const enhancer = applyMiddleware(thunk, routerMiddleware(history), api);
const store = createStore(reducer, {}, enhancer);

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/inbox" component={InboxScene}/>
          <Route path="/:id" component={MailScene}/>
          <Redirect from="/" to="/inbox"/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
