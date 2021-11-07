import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RecipeDetailsComponent extends Component {
  @service wishlist;

  @tracked fullIcon = this.args.findRecipe();

  @action
  onLikeHandler() {
    if (this.fullIcon) {
      this.args.removeFromWishlist();
    } else {
      this.args.addToWishlist();
    }

    this.fullIcon = !this.fullIcon;
  }
}
