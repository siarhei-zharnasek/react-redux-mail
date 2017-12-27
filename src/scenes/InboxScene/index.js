import React, {Component} from 'react';
import MailListScene from './MailsListScene';
import MailScene from './MailScene';
import {Route} from "react-router-dom";
import NestedRouterLevel from "../../decorators/NestedRouterLevel";

class InboxScene extends Component {

  render() {
    return (
      <NestedRouterLevel>
        <Route path="/inbox" component={MailListScene} exact/>
        <Route path="/inbox/:id" renderComponent={MailScene} exact/>
      </NestedRouterLevel>
    );
  }

}

export default InboxScene;
