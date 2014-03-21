class SurveySerializer < ActiveModel::Serializer
  attributes :id, :name, :next_question_id
  has_many :questions, embed: :ids, include: true

  def next_question_id
    object.questions.unanswered.first.id
  end
end
