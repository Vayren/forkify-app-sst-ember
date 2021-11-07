import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class WishlistController extends Controller {
  @service wishlist;

  get categories() {
    const categories = {};
    const recipes = Object.values(this.wishlist.recipes);

    recipes.reduce((acc, curr) => {
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
  removeFromWishlist(id) {
    this.wishlist.remove(id);
  }
}
