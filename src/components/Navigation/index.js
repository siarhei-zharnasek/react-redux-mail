import React from 'react';
import PropTypes from 'prop-types';

import {NavLink} from "react-router-dom";

import './index.css';

const Navigation = ({navItems}) => {

  const links = navItems.map((item) => {
    const {key, title} = item;
    return (
      <li key={key}>
        <NavLink activeClassName="navigation_main_active-link" to={`/${key}`}>{title}</NavLink>
      </li>
    )
  });

  return (
    <ul className="navigation_main">
      {links}
    </ul>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
};

export default Navigation;