import { check } from 'meteor/check';
import { DiscussionsCollection } from '../db/DiscussionsCollection';

Meteor.methods({
    'discussions.insert'(text, email){
        check(text, String);
        if(!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        DiscussionsCollection.insert({
            text,
            createdAt: new Date,
            userId: this.userId,
            email: email
        });
    }
})