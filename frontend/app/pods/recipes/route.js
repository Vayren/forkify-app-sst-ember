import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesRoute extends Route {
  @service pagination;

  model() {
    return this.store.peekAll('recipe');
  }

  resetController() {
    this.pagination.resetCurrentPage();
  }
}
