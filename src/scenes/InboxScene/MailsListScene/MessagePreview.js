import React from 'react';
import {NavLink} from 'react-router-dom';

const MessagePreview = ({id, sender, subject, date}) => (
  <div>
    <NavLink to={{
      pathname: `/inbox/${id}`
    }}>
      <span>{sender}</span>
      <span className="message-subject">{subject}</span>
      <span>{date}</span>
    </NavLink>
  </div>
);

export default MessagePreview;