import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type RecipeModel from 'frontend/pods/recipe/model';

export default class RecipesController extends Controller {
  resPerPage = 10;

  @tracked currentPage = 1;

  declare recipes: RecipeModel[];

  get pages(): number {
    return Math.ceil(this.recipes.length / this.resPerPage);
  }

  get currentRecipeList(): RecipeModel[] {
    const start = (this.currentPage - 1) * this.resPerPage;
    const end = this.currentPage * this.resPerPage;

    return this.recipes.slice(start, end);
  }

  get showNextButton(): boolean {
    return this.currentPage !== 0 && this.currentPage < this.pages;
  }

  get showPrevButton(): boolean {
    return this.currentPage > 1 && this.currentPage <= this.pages;
  }

  get nextPage(): number {
    return this.currentPage + 1;
  }

  get prevPage(): number {
    return this.currentPage - 1;
  }

  @action
  goNext(): void {
    this.currentPage = this.currentPage + 1;
  }

  @action
  goPrev(): void {
    this.currentPage = this.currentPage - 1;
  }
}
