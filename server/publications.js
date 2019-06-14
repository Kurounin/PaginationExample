import { publishPagination } from 'meteor/kurounin:pagination';

publishPagination(MyCollection, {
	name: 'items.pagination',
    filters: {is_enabled: true},
    transform_options: function (filters, options) {
        options.fields = {
			idx: 1,
			is_enabled: 1,
			score: { $meta: "textScore" }
		};
        return options;
    }
});


Meteor.publish('items.byId', function(itemId) {
  return MyCollection.find({ _id: itemId }, { 
    fields: {
      _id: 1,
      related_id: 1,
    }
  });
});

MyCollection.allow({
    insert: function(userId) {
        return true;
    },
    update: function(userId) {
        return true;
    },
    remove: function(userId) {
        return true;
    }
});
