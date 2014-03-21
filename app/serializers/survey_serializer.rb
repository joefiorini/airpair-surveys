class SurveySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :questions, embed: :ids
end
