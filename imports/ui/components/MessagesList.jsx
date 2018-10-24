import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Messages from '../../api/messages';
import Message from './Message.jsx';
import { Meteor } from 'meteor/meteor';

class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ret;
    if (this.props.loading) {
      ret = <p>loading...</p>
    } else {
      const msgs = this.props.messagesArray;
      ret = (
        <div>
          <p>
            { msgs.length } messages found
          </p>
          {  msgs.map( message => <Message key={message._id} {...message}/>) }
        </div>
      );
    }
    return (
    <div id="messages-box">
      { ret }
    </div>
    );
  }
}

export default MessagesListContainer = withTracker( () => {
  const handle = Meteor.subscribe('messages.all');
  return {
    loading: !handle.ready(),
    messagesArray: Messages.find().fetch(),
  }
})(MessagesList);