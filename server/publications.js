import { publishPagination } from 'meteor/kurounin:pagination';

publishPagination(MyCollection, {
    filters: {is_enabled: true},
    transform_options: function (filters, options) {
        options.fields = _.extend(options.fields, {score: { $meta: "textScore" }});
        return options;
    }
});