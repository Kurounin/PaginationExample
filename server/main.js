import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  MyCollection._ensureIndex({
	  title: "text"
  });
  
  if (!MyCollection.find().count()) {
	  for (var i = 0; i < 100; i++) {
		  MyCollection.insert({
			  title: 'Document #' + i,
			  idx: i,
			  is_enabled: (i % 5) > 0
		  });
	  }
  }
});
