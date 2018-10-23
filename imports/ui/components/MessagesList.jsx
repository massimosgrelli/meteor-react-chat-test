import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Messages from '../../api/messages';
import Message from './Message.jsx';

class MessagesList extends Component {
  render() {
    const msgs = this.props.messagesArray;
    return (
    <div id="messages-box">
      <p>
        { msgs.length } messages found
      </p>
      {
        msgs.map( message => <Message {...message}/>)
      }
    </div>
    );
  }
}

export default MessagesListContainer = withTracker( () => {
  return {
    messagesArray: Messages.find().fetch(),
  }
})(MessagesList);