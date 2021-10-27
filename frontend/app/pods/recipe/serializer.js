import RESTSerializer from '@ember-data/serializer/rest';

export default class RecipeSerializer extends RESTSerializer {
  attrs = {
    imageUrl: 'image_url',
    sourceUrl: 'source_url',
    cookingTime: 'cooking_time',
  };

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload.data,
      id,
      requestType
    );
  }
}
