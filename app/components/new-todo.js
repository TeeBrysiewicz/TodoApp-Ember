import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addTodo: function() {
			let title = this.get('title');
			this.sendAction('addTodo', title);
		}
	}
});