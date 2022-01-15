import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import type WishlistService from './service';
import { LocalStorageRecipe } from './service';

interface RecipeCategories {
  [category: string]: LocalStorageRecipe[];
}

export default class WishlistController extends Controller {
  @service declare wishlist: WishlistService;

  get categories(): RecipeCategories {
    const categories: RecipeCategories = {};
    const recipes = Object.values(this.wishlist.recipes);

    recipes.reduce((acc, curr: LocalStorageRecipe) => {
      const category = acc[curr.category];

      if (category) {
        category.push(curr);
      } else {
        acc[curr.category] = [curr];
      }

      return acc;
    }, categories);

    return categories;
  }

  @action
  removeFromWishlist(id: string): void {
    this.wishlist.remove(id);
  }
}
