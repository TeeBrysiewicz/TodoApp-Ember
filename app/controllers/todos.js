import Ember from 'ember';
import { Mixin } from 'ember-validations';

export default Ember.Controller.extend(Mixin, {
	validations: {
    'todo.title': {
      presence: true,
      length: { minimum: 5 }
    }
  }
});
