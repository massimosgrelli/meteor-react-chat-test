import { Meteor } from 'meteor/meteor';
import Messages from '/imports/api/messages';

Meteor.startup(() => {
  if (Messages.find().count() === 0) {
    let data = {
        "username": "Massimo",
        "body": "This is a new new message in this chat N. ",
        "createdAt": new Date()
      };
    for (let i = 0; i < 5000; i++) {
      Messages.insert({...data, body: data.body + i});
    }
  }
});
