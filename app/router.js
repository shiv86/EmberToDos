import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('todos', {path : '/'});
	this.route('active');
	this.route('completed');
	this.resource('todos', function(){
		this.resource('todo', {path:'todo/:todo_id'});
	});
});

export default Router;
