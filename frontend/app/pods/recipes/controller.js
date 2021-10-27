import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RecipesController extends Controller {
  resPerPage = 10;

  @tracked currentPage = 1;

  get pages() {
    return Math.ceil(this.recipes.length / this.resPerPage);
  }

  get currentRecipeList() {
    const start = (this.currentPage - 1) * this.resPerPage;
    const end = this.currentPage * this.resPerPage;

    return this.recipes.slice(start, end);
  }

  get showNextButton() {
    return this.currentPage !== 0 && this.currentPage < this.pages;
  }

  get showPrevButton() {
    return this.currentPage > 1 && this.currentPage <= this.pages;
  }

  get nextPage() {
    return this.currentPage + 1;
  }

  get prevPage() {
    return this.currentPage - 1;
  }

  @action
  goNext() {
    this.currentPage = this.currentPage + 1;
  }

  @action
  goPrev() {
    this.currentPage = this.currentPage - 1;
  }
}
