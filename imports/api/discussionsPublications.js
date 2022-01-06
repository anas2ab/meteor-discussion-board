import { Meteor } from 'meteor/meteor';
import { DiscussionsCollection } from '/imports/db/DiscussionsCollection';

Meteor.publish('discussions', function publishDiscussions() {
  return DiscussionsCollection.find({});
});