class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.text :strIngredient1
      t.string :idMeal
      t.string :strMeal
      t.text :strInstructions
      t.text :strYoutube
      t.text :strMealThumb
      t.string :strIngredient2 
      t.string :strIngredient3
      t.string :strIngredient4
      t.string :strIngredient5
      t.string :strIngredient6 
      t.string :strIngredient7 
      t.string :strIngredient8
      t.string :strIngredient9 
      t.string :strIngredient10
      t.string :strIngredient11 
      t.string :strIngredient12
      t.string :strIngredient13
      t.string :strIngredient14
      t.string :strIngredient15
      t.string :strIngredient16 
      t.string :strIngredient17
      t.string :strIngredient18
      t.string :strIngredient19
      t.string :strIngredient20
      t.string :strMeasure1
      t.string :strMeasure2
      t.string :strMeasure3
      t.string :strMeasure4
      t.string :strMeasure5
      t.string :strMeasure6
      t.string :strMeasure7
      t.string :strMeasure8
      t.string :strMeasure9
      t.string :strMeasure10
      t.string :strMeasure11
      t.string :strMeasure12
      t.string :strMeasure13
      t.string :strMeasure14
      t.string :strMeasure15
      t.string :strMeasure16
      t.string :strMeasure17
      t.string :strMeasure18
      t.string :strMeasure19
      t.string :strMeasure20

      t.timestamps
    end
  end
end
