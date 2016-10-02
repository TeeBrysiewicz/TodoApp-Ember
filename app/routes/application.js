import Ember from 'ember';

export default Ember.Route.extend({
	remodal : Ember.inject.service(),

	setupController(controller, model) {
		this._super(controller, model);	
		controller.set('todoTitle', '');
	},
	actions: {
		addTodo: function(title) {
			// Create New Task
			let newTodo = this.store.createRecord('todo', {
				title: title
			});

			// Save To API
			newTodo.save();

			// Clear Form & Close
			this.get('controller').setProperties({
				todoTitle: ''
			});
			this.get('remodal').close();
		},
		updateTodo: function(id) {

			let todo = this.store.findRecord('todo', id).then(function(todo) {
				let completed = todo.get('is_completed');
				todo.set('is_completed', !completed);
				console.log(todo);
				todo.save();
			});
		}
	}
});