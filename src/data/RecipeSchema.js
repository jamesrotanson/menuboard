const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  preparationTime: { type: Number, required: true },
  difficultyLevel: { type: String, enum: ['Easy', 'Moderate', 'Difficult'], required: true },
  servings: { type: Number, required: true },
  image: { type: String, required: false },
  dateAdded: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
