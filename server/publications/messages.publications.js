import { Meteor } from 'meteor/meteor';
import Messages from '../../imports/api/messages.collections';

Meteor.publish('messages.all', function() {
  return Messages.find();
});