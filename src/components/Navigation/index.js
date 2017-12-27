import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './index.css';

export default class Navigation extends Component {

  render() {
    const {nav_items} = this.props;

    const links = nav_items.map((item) => {
      return (
        <li key={item.key}>
          <NavLink activeClassName="navigation_main_active-link"  to={`/${item.key}`}>{item.title}</NavLink>
        </li>
      )
    });

    return (
      <ul className="navigation_main">
        {links}
      </ul>
    );
  }
}