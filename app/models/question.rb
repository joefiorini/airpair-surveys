class Question < ActiveRecord::Base
  belongs_to :survey

  def self.unanswered
    where(answered: false)
  end
end
