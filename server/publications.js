import { publishPagination } from 'meteor/kurounin:pagination';

publishPagination(MyCollection, {
    filters: {is_enabled: true}
});