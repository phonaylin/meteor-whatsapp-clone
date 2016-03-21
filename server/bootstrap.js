Meteor.startup(function () {
 if (Meteor.users.find().count() != 0) return;
 
  Accounts.createUserWithPhone({
    phone: '+972501234567',
    profile: {
      name: 'Chris Chia'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+972501234568',
    profile: {
      name: 'Felicia'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+972501234569',
    profile: {
      name: 'Muthu'
    }

  });
});