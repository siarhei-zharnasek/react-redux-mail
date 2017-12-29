import React from 'react'
import {Redirect, Switch} from "react-router-dom";

export default class FirstLevelRouter extends React.Component {

  render() {
    return (
      <Switch>
        {this.props.children}
        <Redirect from="*" to="/error"/>
      </Switch>
    )
  }

}