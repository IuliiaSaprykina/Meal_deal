class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :api_key
      t.string :label
      t.text :image
      t.text :url
      t.integer :calories

      t.timestamps
    end
  end
end
