import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RecipeListComponent extends Component {
  @service pagination;

  recipes = this.args.recipes;
  resPerPage = this.pagination.resPerPage;

  get pages() {
    return Math.ceil(this.recipes.length / this.resPerPage);
  }

  get currentRecipeList() {
    const start = (this.pagination.currentPage - 1) * this.resPerPage;
    const end = this.pagination.currentPage * this.resPerPage;

    return this.recipes.slice(start, end);
  }

  get showNextButton() {
    return (
      this.pagination.currentPage !== 0 &&
      this.pagination.currentPage < this.pages
    );
  }

  get showPrevButton() {
    return (
      this.pagination.currentPage > 1 &&
      this.pagination.currentPage <= this.pages
    );
  }

  get nextPage() {
    return this.pagination.currentPage + 1;
  }

  get prevPage() {
    return this.pagination.currentPage - 1;
  }

  @action
  goNext() {
    this.pagination.goNext();
  }

  @action
  goPrev() {
    this.pagination.goPrev();
  }
}
