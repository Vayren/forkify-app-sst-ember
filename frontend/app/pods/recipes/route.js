import Route from '@ember/routing/route';

export default class RecipesRoute extends Route {
  queryParams = {
    search: {
      refreshModel: true,
    },
  };

  model(params) {
    return this.store.query('recipe', params);
  }

  async redirect(model) {
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
