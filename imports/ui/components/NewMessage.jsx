import React, { Component } from 'react';
import Messages from '../../api/messages.collections.js'
import { Meteor } from 'meteor/meteor';

class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  
  handleOnSubmit(e) {
    e.preventDefault();
    let newMessage = e.currentTarget.message;
    let body = newMessage.value;
    Meteor.call('messages.insert', body, function(err, res) {
      if (err) return console.log(err);
      console.log('message.insert ok')
      newMessage.value = '';
      let div = document.getElementById('messages-scroll');
      // console.log(div);
      div.scrollTop = div.scrollHeight;
    });
  }

  render() {
    return (
      <div className="new-message-container">
      <form onSubmit={ this.handleOnSubmit }>
          <input className="form-control" type="text" name="message" id="message"/>
          <button type="submit" className="btn btn-outline-secondary">Post message</button>
      </form>
      </div>
    )
  }
}

export default NewMessage;