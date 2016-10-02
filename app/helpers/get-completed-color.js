import Ember from 'ember';

export function getCompletedColor(params/*, hash*/) {
	if (params === true) {
		return 'green';
	} else {
		return 'red';
	}
}

export default Ember.Helper.helper(getCompletedColor);
