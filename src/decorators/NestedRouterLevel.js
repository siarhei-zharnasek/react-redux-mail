import React from 'react'
import {Redirect, Switch} from "react-router-dom";

export default class FirstLevelRouter extends React.Component {

  getChildRoutes = () => {
    return React.Children.map(this.props.children, (child) => {
      if (!child.props.component) {
        return React.cloneElement(
          child,
          {...child.props, render: this.renderComponentById(child.props.renderComponent)}
        )
      }
      return child;
    })
  };

  render() {

    return (
      <Switch>
        {this.getChildRoutes()}
        <Redirect from="*" to="/error"/>
      </Switch>
    )
  }

  renderComponentById = (Component) => ({match}) => {
    const {id} = match.params;
    return <Component id={id} key={id}/>
  }

}