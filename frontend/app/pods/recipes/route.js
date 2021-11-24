import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesRoute extends Route {
  queryParams = {
    search: {
      refreshModel: true,
    },
  };

  @service router;

  async model(params) {
    return await this.store.query('recipe', params);
  }

  async redirect(model, transition) {
    const routeName = transition?.from?.name;
    const { recipe_id } = transition.to.params;

    if (routeName === 'wishlist' && recipe_id) {
      return;
    }

    const { id } = model.get('firstObject');
    const firstRecipe = await this.store.findRecord('recipe', id);

    this.transitionTo('recipes.recipe', firstRecipe);
  }

  setupController(controller, model) {
    controller.recipes = model;
  }

  resetController(controller) {
    controller.currentPage = 1;
  }
}
