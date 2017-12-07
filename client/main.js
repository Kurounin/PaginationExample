import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.main.onCreated(function () {
    this.currentTemplate = new ReactiveVar("home");
});

Template.main.helpers({
    getCurrentTemplate() {
        return Template.instance().currentTemplate.get();
    },
    getActiveClass(id) {
        return Template.instance().currentTemplate.get() == id ? "active" : null;
    }
});

Template.main.events({
    'click .templateTab': function(event, templateInstance) {
        templateInstance.currentTemplate.set($(event.currentTarget).data("id"));
    }
});

Template.home.onCreated(function () {
    this.pagination = new Meteor.Pagination(MyCollection, {
        filters: {
            idx: {$gt: 9}
        },
        sort: {
            title: 1
        },
        debug: true
    });
});

Template.home.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
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
