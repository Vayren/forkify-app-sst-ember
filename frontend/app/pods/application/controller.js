import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;
  @service pagination;

  @tracked searchTerm = '';

  @action
  updateSearchTerm({ target }) {
    this.searchTerm = target.value;
  }

  @action
  async handleSearchSubmit(event) {
    event.preventDefault();

    if (!this.searchTerm.trim().length) {
      //TODO: show error message about submitting empty filed
      return;
    }

    // clear old recipe records
    this.store.unloadAll('recipe');

    await this.store.query('recipe', {
      search: this.searchTerm,
    });

    this.pagination.resetCurrentPage();

    this.searchTerm = '';

    if (this.router.currentURL !== '/') {
      this.router.transitionTo('recipes');
    }
  }
}
