import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import '/imports/api/discussionsMethods';
import '/imports/api/discussionsPublications';
import '/imports/api/serverMethods';



const SEED_EMAIL = 'anas@test.com';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
    if (!Accounts.findUserByEmail(SEED_EMAIL)) {
        Accounts.createUser({
            email: SEED_EMAIL,
            password: SEED_PASSWORD,
        });
    }
});
