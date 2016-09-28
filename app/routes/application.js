import Ember from 'ember';
import Mixin from 'ember-validations/index';


export default Ember.Route.extend(Mixin, {
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

			// Clear Form & Close
			this.get('controller').setProperties({
				todoTitle: ''
			});
			this.get('remodal').close();
		}
	},
	validations: {
    'todo.title': {
      presence: true,
      length: { minimum: 5 }
    }
  }
});