import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Messages from './messages.collections';

Meteor.methods({
  'messages.insert'(body) {
    check(body, String);
    Messages.insert({
      username: "Dude",
      body: body,
      createdAt: new Date()
    });
  }
})