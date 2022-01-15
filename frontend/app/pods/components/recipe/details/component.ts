import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type WishlistService from 'frontend/pods/wishlist/service';

interface Args {
  isRecipeInWishlist: boolean;
  addToWishlist: () => void;
  removeFromWishlist: () => void;
}

export default class RecipeDetailsComponent extends Component<Args> {
  @service declare wishlist: WishlistService;

  @tracked fullIcon = this.args.isRecipeInWishlist;

  @action
  onLikeHandler(): void {
    if (this.fullIcon) {
      this.args.removeFromWishlist();
    } else {
      this.args.addToWishlist();
    }

    this.fullIcon = !this.fullIcon;
  }
}
