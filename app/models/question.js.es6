export default DS.Model.extend({
  question: DS.attr('string'),
  survey: DS.belongsTo('survey')
});
