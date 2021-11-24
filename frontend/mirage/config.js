export default function () {
  this.urlPrefix = 'https://forkify-api.herokuapp.com/';
  this.namespace = '/api/v2';

  this.get('/recipes');
  this.get('/recipes/:recipe_id');
}
