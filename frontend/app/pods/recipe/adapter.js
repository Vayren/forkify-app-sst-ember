import RESTAdapter from '@ember-data/adapter/rest';

export default class RecipeAdapter extends RESTAdapter {
  host = 'https://forkify-api.herokuapp.com';
  namespace = 'api/v2';

  shouldReloadRecord() {
    return true;
  }
}
