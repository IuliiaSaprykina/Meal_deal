class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :idMeal
      t.string :strMeal
      t.text :strInstructions
      t.text :strYoutube
      t.integer :strMealThumb

      t.timestamps
    end
  end
end
