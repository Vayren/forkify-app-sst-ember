import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;

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

    const currentSearchQuery = this.router.currentRoute.queryParams.search;

    if (currentSearchQuery === this.searchTerm) {
      this.searchTerm = '';

      return;
    }

    this.router.transitionTo('recipes', {
      queryParams: {
        search: this.searchTerm,
      },
    });

    this.searchTerm = '';
  }
}
