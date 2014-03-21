class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :answered
  has_one :survey, embed: :id, include: true
end
