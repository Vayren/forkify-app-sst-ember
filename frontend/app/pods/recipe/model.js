import Model, { attr } from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr('string') title;
  @attr('string') imageUrl;
  @attr('string') publisher;
  @attr('string') sourceUrl;
  @attr('number') servings;
  @attr('number') cookingTime;
  @attr ingredients;
}
