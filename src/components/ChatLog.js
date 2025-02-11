import React from 'react';
import './ChatLog.css';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return props.entries.map((entry, id) => {
    return (
      <div key={id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          updateLikeCallback={props.updateLikeCallback}
          liked={false}
        ></ChatEntry>
      </div>
    );
  });
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
