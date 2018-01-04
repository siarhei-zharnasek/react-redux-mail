import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import MessagePreview from './MessagePreview';

const MessagesList = ({messages}) => {
  return (
    <div>
      {messages.map((msg) => <MessagePreview key={msg._id} previewData={msg}/>)}
    </div>
  );
};

MessagesList.propTypes = {
  messages: ImmutablePropTypes.list.isRequired
};

export default MessagesList;