import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const EmailData = (props) => {
  const {sender, subject, date} = props.selectedMailData;
  return (
    <div>
      <span>{sender}</span>
      <span className="message-subject">{subject}</span>
      <span>{date}</span>
    </div>
  )
};

EmailData.propTypes = {
  selectedMailData: ImmutablePropTypes.contains({
    sender: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmailData;
