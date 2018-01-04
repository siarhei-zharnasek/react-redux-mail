import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';
import {Route, Redirect, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import InboxScene from './InboxScene';
import reducer from '../reducers/index';
import {MAIN_NAVIGATION} from "../const/navigation-items";
import Navigation from "../components/Navigation";
import SentScene from "./SentScene";
import TrashScene from "./TrashScene";
import ErrorScene from "./ErrorScene";


const history = createBrowserHistory();
const enhancer = applyMiddleware(thunk, routerMiddleware(history));
const store = createStore(reducer, {}, enhancer);

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="root">
          <Navigation navItems={MAIN_NAVIGATION}/>
          <div className="root_scene-layout">
            <Switch>
              <Route path="/inbox" component={InboxScene}/>
              <Route path="/sent" component={SentScene}/>
              <Route path="/trash" component={TrashScene}/>

              <Route path="/error" component={ErrorScene}/>

              <Redirect from="/" to="/inbox" exact/>
              <Redirect from="*" to="/error"/>
            </Switch>
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
