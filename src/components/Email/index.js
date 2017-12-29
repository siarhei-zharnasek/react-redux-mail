import React from 'react';
import PropTypes from 'prop-types';

const EmailData = (props) => {
  const {sender, subject, date} = props;
  return (
    <div>
      <span>{sender}</span>
      <span className="message-subject">{subject}</span>
      <span>{date}</span>
    </div>
  )
};

EmailData.propTypes = {
  sender: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  subject: PropTypes.string
};

export default EmailData;
