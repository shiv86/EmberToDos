import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        editToDo: function() {
            this.set('isEditing', true);
        },
        persist: function(){
            var model = this.get('model');
            this.set('isEditing',false);
            model.set('isCompleted',false);
        },
        deleteRecord: function(){
            var model = this.get('model');
            model.deleteRecord();
        }
    },
    isEditing: false,
    isCompleted: function(key, value) {
        var model = this.get('model');

        if (value === undefined) {
            // property being used as a getter
            return model.get('isCompleted');
        } else {
            // property being used as a setter
            model.set('isCompleted', value);
            model.save();
            return value;
        }
    }.property('model.isCompleted')
    /* The isCompleted function is marked a computed property
     whose value is dependent on the value of model.isCompleted
    */
});
