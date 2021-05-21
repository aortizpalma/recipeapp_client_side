import axios from 'axios';

// URL pointing to our backend route
const url = 'http://localhost:5000/posts';
const url_recipes = 'http://localhost:5000/recipes';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);


export const fetchRecipes = () => axios.get(url_recipes);
export const createRecipe = (newRecipe) => axios.post(url_recipes, newRecipe);
export const updateRecipe = (id, updatedRecipe) => axios.patch(`${url_recipes}/${id}`, updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${url_recipes}/${id}`);
export const likeRecipe = (id) => axios.patch(`${url_recipes}/${id}/likeRecipe`);
