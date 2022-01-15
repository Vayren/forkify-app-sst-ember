import RESTSerializer from '@ember-data/serializer/rest';
import StoreService from '@ember-data/store';
import RecipeModel, { Ingredient } from './model';

interface Response {
  data: {
    recipe: {
      cookingTime: number;
      id: string;
      imageUrl: string;
      ingredients: Ingredient[];
      publisher: string;
      servings: number;
      sourceUrl: string;
      title: string;
    };
  };
  status: string;
}

export default class RecipeSerializer extends RESTSerializer {
  attrs = {
    imageUrl: 'image_url',
    sourceUrl: 'source_url',
    cookingTime: 'cooking_time',
  };

  normalizeResponse(
    store: StoreService,
    primaryModelClass: RecipeModel,
    payload: Response,
    id: string | number,
    requestType: string
  ) {
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload.data,
      id,
      requestType
    );
  }
}
