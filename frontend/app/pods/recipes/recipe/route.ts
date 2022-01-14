import Route from '@ember/routing/route';
import DS from 'ember-data'; // eslint-disable-line ember/use-ember-data-rfc-395-imports
import type RecipeModel from 'frontend/pods/recipe/model';

interface RecipeModelParams {
  recipe_id: string;
}

export default class RecipesRecipeRoute extends Route {
  model({ recipe_id }: RecipeModelParams): DS.PromiseObject<RecipeModel> {
    return this.store.findRecord('recipe', recipe_id);
  }
}
