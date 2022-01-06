Meteor.methods({
    'confirm': (email) => {
      if (Meteor.isServer && Accounts.findUserByEmail(email)) {
        return true;
      } else return false;
    }
});