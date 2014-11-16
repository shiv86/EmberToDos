import Ember from 'ember';

export default Ember.Route.extend({


	model: function(params) {
		return this.store.find('todo',params.todo_id);
	}


	/*,

	setupController: function(controller,model){
		this._super(controller,model);
		var modIsComplete = model.get('isCompleted');
		if(modIsComplete === true){
			controller.set('isCompletedClass', 'completed');
		}

	} */
});
