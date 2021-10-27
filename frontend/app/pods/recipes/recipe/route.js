import Route from '@ember/routing/route';

export default class RecipesRecipeRoute extends Route {
  model({ recipe_id }) {
    return recipe_id;
  }
}
