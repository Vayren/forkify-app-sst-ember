import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import RecipeModel from 'frontend/pods/recipe/model';
import type WishlistService from 'frontend/pods/wishlist/service';

interface Args {
  recipe: RecipeModel;
}

export default class RecipeComponent extends Component<Args> {
  @service declare wishlist: WishlistService;

  recipe = this.args.recipe;

  @action
  add(): void {
    this.wishlist.add(this.recipe);
  }

  @action
  remove(): void {
    this.wishlist.remove(this.recipe.id);
  }

  get isRecipeInWishlist(): boolean {
    return !!this.wishlist.find(this.recipe.id);
  }
}
