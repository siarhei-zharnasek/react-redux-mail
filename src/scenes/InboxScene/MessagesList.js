import React from 'react';
import PropTypes from 'prop-types';
import MessagePreview from './MessagePreview';

const MessagesList = ({messages}) => (
  <div>
    {messages.map((msg) => <MessagePreview key={msg.id} {...msg} />)}
  </div>
);

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessagesList;