import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Actions
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe] 
  })),
  
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r);
    return { 
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    };
  }),

  deleteRecipe: (recipeId) => set(state => {
    const updatedRecipes = state.recipes.filter(r => r.id !== recipeId);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    };
  }),

  setSearchTerm: (term) => set(state => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )
  })),
}));

export default useRecipeStore;
