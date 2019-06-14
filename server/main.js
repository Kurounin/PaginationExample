import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  MyCollection._ensureIndex({
	  title: "text"
  });
  
  if (!MyCollection.find().count()) {
	  const relatedDocs = [];
	  
	  for (var i = 0; i < 20; i++) {
		  relatedDocs.push(RelatedCollection.insert({
			  title: 'Related Document #' + i
		  }));
	  }
	  
	  for (var i = 0; i < 100; i++) {
		  MyCollection.insert({
			  title: 'Document #' + i,
			  idx: i,
			  related_id: relatedDocs[i % 20],
			  is_enabled: (i % 5) > 0
		  });
	  }
  }
});
