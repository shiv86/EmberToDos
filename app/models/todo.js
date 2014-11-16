import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean'),
    isEditing: DS.attr('boolean', {defaultValue: false})
});
