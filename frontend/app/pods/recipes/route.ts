import Route from '@ember/routing/route';
import DS from 'ember-data'; // eslint-disable-line ember/use-ember-data-rfc-395-imports
import type RecipesController from './controller';
import type RouterService from '@ember/routing/router-service';
import type RecipeModel from 'frontend/pods/recipe/model';
type Transition = ReturnType<RouterService['transitionTo']>;

interface RecipesParams {
  search: string;
}

export default class RecipesRoute extends Route {
  queryParams = {
    search: {
      refreshModel: true,
    },
  };

  model(params: RecipesParams): DS.PromiseArray<RecipeModel> {
    return this.store.query('recipe', params);
  }

  async redirect(model: RecipeModel[], transition: Transition) {
    const routeName = transition?.from?.name;
    const { recipe_id } = transition.to.params;

    if (routeName === 'wishlist' && recipe_id) {
      return;
    }

    const firstModel = model.get('firstObject');

    if (firstModel) {
      const { id } = firstModel;
      const firstRecipe = await this.store.findRecord('recipe', id);
      this.transitionTo('recipes.recipe', firstRecipe);
    }
  }

  setupController(controller: RecipesController, model: RecipeModel[]) {
    controller.recipes = model;
  }

  resetController(controller: RecipesController) {
    controller.currentPage = 1;
  }
}
