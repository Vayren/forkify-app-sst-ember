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

  setupController(controller, model) {
    controller.recipes = model;
  }

  resetController(controller) {
    controller.currentPage = 1;
  }
}
