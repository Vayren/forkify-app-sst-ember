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
  handleSearchSubmit(event) {
    event.preventDefault();

    if (!this.searchTerm.trim().length) {
      //TODO: show error message about submitting empty filed
      return;
    }

    //TODO: make a request to API with q=searchTerm
    this.searchTerm = '';

    if (this.router.currentURL !== '/') {
      this.router.transitionTo('recipes');
    }
  }
}
