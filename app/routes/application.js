import Ember from 'ember';

export default Ember.Route.extend({
	remodal : Ember.inject.service(),

	setupController(controller, model) {
		this._super(controller, model);	
		controller.set('todoTitle', '');
	},
	actions: {
		addTodo: function(title){
			// Create New Task
			let newTodo = this.store.createRecord('todo', {
				title: title
			});

			// Save To API
			newTodo.save();

			// Clear Form
			this.get('controller').setProperties({
				todoTitle: ''
			});
			this.get('remodal').close();
		}
	}
});