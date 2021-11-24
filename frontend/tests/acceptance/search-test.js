import { module, test } from 'qunit';
import { visit, currentURL, currentRouteName } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { loadRecipes } from 'frontend/tests/helpers/load-recipes';

module('Acceptance | Search functionality', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.recipes = this.server.createList('recipe', 10);

    await visit('/');

    await loadRecipes('pasta');
  });

  test('it clears search field after submitting', async function (assert) {
    assert.dom('.qa-search-field').hasValue('');
  });

  test('it displays search param in the URL', async function (assert) {
    assert.ok(currentURL().includes('search=pasta'));
  });

  test('it redirects to recipes.recipe route', async function (assert) {
    assert.ok(currentRouteName(), 'recipes.recipe');
  });

  test('it loads 10 recipes', async function (assert) {
    assert.dom('.qa-recipe-list').exists();
    assert.dom('.qa-recipe-inline').exists({ count: 10 });
  });

  test('it loads first recipe displays by default', async function (assert) {
    const { title } = this.recipes[0];

    assert.dom('.qa-recipe-details').exists();
    assert.dom('.qa-recipe-details-title').hasText(title);
  });

  test('it changes search param in the URL when new search field was submitted', async function (assert) {
    await loadRecipes('pizza');

    assert.ok(currentURL().includes('search=pizza'));
  });
});
