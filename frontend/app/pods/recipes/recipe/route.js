import Route from '@ember/routing/route';

export default class RecipesRecipeRoute extends Route {
  async model({ recipe_id }) {
    return await this.store.find('recipe', recipe_id);
  }
}
