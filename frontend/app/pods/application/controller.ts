import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import type RouterService from '@ember/routing/router-service';

interface InputEvent {
  target: {
    value: string;
  };
}

export default class ApplicationController extends Controller {
  declare queryParams: [
    {
      searchTerm: 'search';
    }
  ];

  @service declare router: RouterService;

  searchTerm = '';

  @action
  updateSearchTerm(event: InputEvent) {
    this.searchTerm = event.target.value;
  }

  @action
  handleSearchSubmit(event: Event): void {
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
