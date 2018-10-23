import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props._id}>
        <div>{this.props.username}</div>
        <div>{this.props.body}</div>
        <hr/>
      </div>
    );
  }
}

export default Message;