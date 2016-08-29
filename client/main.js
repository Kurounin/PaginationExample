import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    this.pagination = new Meteor.Pagination(MyCollection, {
        sort: {
            title: 1
        }
    });
});

Template.hello.helpers({
    templatePagination: function () {
        return Template.instance().pagination;
    },
    documents: function () {
        return Template.instance().pagination.getPage();
    },
	clickEvent: function() {
		return function(e, templateInstance, clickedPage) {
			e.preventDefault();
			console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
		};
	}
});
