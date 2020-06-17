# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_12_233105) do

  create_table "recipes", force: :cascade do |t|
    t.text "strIngredient1"
    t.string "idMeal"
    t.string "strMeal"
    t.text "strInstructions"
    t.text "strYoutube"
    t.text "strMealThumb"
    t.string "strIngredient2"
    t.string "strIngredient3"
    t.string "strIngredient4"
    t.string "strIngredient5"
    t.string "strIngredient6"
    t.string "strIngredient7"
    t.string "strIngredient8"
    t.string "strIngredient9"
    t.string "strIngredient10"
    t.string "strIngredient11"
    t.string "strIngredient12"
    t.string "strIngredient13"
    t.string "strIngredient14"
    t.string "strIngredient15"
    t.string "strIngredient16"
    t.string "strIngredient17"
    t.string "strIngredient18"
    t.string "strIngredient19"
    t.string "strIngredient20"
    t.string "strMeasure1"
    t.string "strMeasure2"
    t.string "strMeasure3"
    t.string "strMeasure4"
    t.string "strMeasure5"
    t.string "strMeasure6"
    t.string "strMeasure7"
    t.string "strMeasure8"
    t.string "strMeasure9"
    t.string "strMeasure10"
    t.string "strMeasure11"
    t.string "strMeasure12"
    t.string "strMeasure13"
    t.string "strMeasure14"
    t.string "strMeasure15"
    t.string "strMeasure16"
    t.string "strMeasure17"
    t.string "strMeasure18"
    t.string "strMeasure19"
    t.string "strMeasure20"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_recipes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "recipe_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["recipe_id"], name: "index_user_recipes_on_recipe_id"
    t.index ["user_id"], name: "index_user_recipes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "user_recipes", "recipes"
  add_foreign_key "user_recipes", "users"
end
