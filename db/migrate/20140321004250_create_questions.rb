class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :question
      t.references :survey, index: true

      t.timestamps
    end
  end
end
