import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PaginationService extends Service {
  resPerPage = 10;

  @tracked _currentPage = 1;

  get currentPage() {
    return this._currentPage;
  }

  goNext() {
    this._currentPage = this._currentPage + 1;
  }

  goPrev() {
    this._currentPage = this._currentPage - 1;
  }

  resetCurrentPage() {
    this._currentPage = 1;
  }
}
