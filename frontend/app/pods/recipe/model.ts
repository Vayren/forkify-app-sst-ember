import Model, { attr } from '@ember-data/model';

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    recipe: RecipeModel;
  }
}

export interface Ingredient {
  quantity: number;
  unit: string;
  description: string;
}

export default class RecipeModel extends Model {
  @attr('string') declare title: string;
  @attr('string') declare imageUrl: string;
  @attr('string') declare publisher: string;
  @attr('string') declare sourceUrl: string;
  @attr('number') declare servings: number;
  @attr('number') declare cookingTime: number;
  @attr declare ingredients: Ingredient[];
}
