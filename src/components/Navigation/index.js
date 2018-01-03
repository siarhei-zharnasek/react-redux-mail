import React from 'react';
import PropTypes from 'prop-types';

import {NavLink} from "react-router-dom";

import './index.css';

const Navigation = ({navItems}) => {

  const links = navItems.map((item) => {
    const {key, title} = item;
    return (
      <NavLink activeClassName="navigation_main_active-link" className='navigation_main_link'
               to={`/${key}`}>{title}</NavLink>
    )
  });

  return (
    <div className="navigation_main">
      {links}
    </div>
  );
};


Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
};

export default Navigation;

//https://colorscheme.ru/#0d41Iw0w0w0w0