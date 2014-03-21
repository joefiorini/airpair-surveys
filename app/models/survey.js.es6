export default DS.Model.extend({
  name: DS.attr('string'),
  nextQuestion: DS.belongsTo('question'),
  questions: DS.hasMany('question', {async: true})
});
