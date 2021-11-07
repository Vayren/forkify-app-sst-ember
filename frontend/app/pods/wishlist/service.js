import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class WishlistService extends Service {
  @service router;

  @tracked recipes = this._getDataFromStorage();

  _getDataFromStorage() {
    const jsonStr = localStorage.getItem('wishlist');

    if (!jsonStr) {
      return {};
    }

    return JSON.parse(jsonStr);
  }

  add(recipe) {
    const category = this.router.currentRoute.queryParams.search;
    const id = recipe.id;
    const attributes = recipe.toJSON();
    const newRecipe = {
      id,
      category,
      ...attributes,
    };

    this.recipes[recipe.id] = newRecipe;

    localStorage.setItem('wishlist', JSON.stringify(this.recipes));

    this.recipes = this._getDataFromStorage();
  }

  remove(id) {
    delete this.recipes[id];

    localStorage.setItem('wishlist', JSON.stringify(this.recipes));

    this.recipes = this._getDataFromStorage();
  }

  find(id) {
    return this.recipes[id];
  }
}
