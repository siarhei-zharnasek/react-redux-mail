import React from 'react';

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

export default EmailData;
