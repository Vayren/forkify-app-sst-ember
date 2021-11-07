import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RecipeComponent extends Component {
  @service wishlist;

  recipe = this.args.recipe;

  @action
  add() {
    this.wishlist.add(this.recipe);
  }

  @action
  remove() {
    this.wishlist.remove(this.recipe.id);
  }

  @action
  find() {
    return this.wishlist.find(this.recipe.id);
  }
}
