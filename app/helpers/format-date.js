import Ember from 'ember';
import Moment from 'moment';

export function formatDate(params) {
	return new Moment(params[0]).format('YYYY-MM-DD');
}

export default Ember.Helper.helper(formatDate);