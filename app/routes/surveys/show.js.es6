export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('survey', params.survey_id);
  },
  actions: {
    markAnswered: function(question) {
      var _this = this;
      question.set("answered", true);
      question.save().then(function(question) {
        question.get('survey').reload();
      });
    },
    destroyRecord: function(model) {
      var _this = this;
      model.destroyRecord().then(function() {
        _this.transitionTo('surveys.index');
      });
    }
  }
});
