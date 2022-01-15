import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import StoreService from '@ember-data/store';
import type RouterService from '@ember/routing/router-service';
import RecipeModel, { Ingredient } from 'frontend/pods/recipe/model';

interface RecipeAttributes {
  cookingTime: number;
  imageUrl: string;
  ingredients: Ingredient[];
  publisher: string;
  servings: number;
  sourceUrl: string;
  title: string;
}

export interface LocalStorageRecipe extends RecipeAttributes {
  id: string;
  category: string;
}

interface LocalStorageRecipes {
  [id: string]: LocalStorageRecipe;
}

export default class WishlistService extends Service {
  @service declare router: RouterService;
  @service declare store: StoreService;

  @tracked recipes = this._getDataFromStorage();

  _getDataFromStorage(): LocalStorageRecipes {
    const jsonStr = localStorage.getItem('wishlist');

    if (!jsonStr) {
      return {};
    }

    return JSON.parse(jsonStr);
  }

  add(recipe: RecipeModel): void {
    const category = <string>this.router.currentRoute.queryParams.search;
    const id = recipe.id;
    const attributes = <RecipeAttributes>recipe.toJSON();
    const newRecipe = {
      id,
      category,
      ...attributes
    };

    this.recipes[recipe.id] = newRecipe;

    localStorage.setItem('wishlist', JSON.stringify(this.recipes));

    this.recipes = this._getDataFromStorage();
  }

  remove(id: string): void {
    delete this.recipes[id];

    localStorage.setItem('wishlist', JSON.stringify(this.recipes));

    this.recipes = this._getDataFromStorage();
  }

  find(id: string): LocalStorageRecipe {
    return this.recipes[id];
  }
}
