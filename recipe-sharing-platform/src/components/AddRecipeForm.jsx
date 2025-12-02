import { useState } from "react";

export default function AddRecipeForm({ addRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Ingredients should include at least two items, separated by commas.");
      return;
    }

    // Create recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split("\n").map((s) => s.trim()),
    };

    addRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Ingredients (separate by commas)"
          className="w-full p-2 border rounded"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <textarea
          placeholder="Preparation Steps (one step per line)"
          className="w-full p-2 border rounded"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
