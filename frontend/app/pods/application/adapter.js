import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'https://forkify-api.herokuapp.com';
  namespace = 'api/v2';
}
