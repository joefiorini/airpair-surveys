export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('survey', params.survey_id);
  },
  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('surveys.show', model);
      });
    },
    cancel: function(model) {
      this.transitionTo('surveys.show', model);
    }
  }
});
