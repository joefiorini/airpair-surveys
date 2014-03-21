var Router = Ember.Router.extend({
  // Uncomment to change Ember's router to use the 
  // HTML5 History API
  // Please note that not all browsers support this!
  // You will also need to uncomment the greedy route matcher
  // in config/routes.rb

  // location: 'history'
});

Router.map(function() {
  this.resource('questions', function() {
    this.route('new');
    this.route('show', {path: ':question_id'});
    this.route('edit', {path: ':question_id/edit'});
  });
  this.resource('surveys', function() {
    this.route('new');
    this.route('show', {path: ':survey_id'});
    this.route('edit', {path: ':survey_id/edit'});
  });
});

export default Router;
