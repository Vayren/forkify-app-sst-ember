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

  test('it loads recipes by entered category in the search filed', async function (assert) {
    assert.dom('.qa-recipe-list').exists();
    assert.dom('.qa-recipe-inline').exists({ count: 10 });
    assert.ok(currentURL().includes('search=pasta'));
  });

  test('it loads first recipe details by default', async function (assert) {
    const { title } = this.recipes[0];

    assert.ok(currentRouteName(), 'recipes.recipe');
    assert.dom('.qa-recipe-details').exists();
    assert.dom('.qa-recipe-details-title').hasText(title);
  });

  test('it changes search category after new search field was submitted', async function (assert) {
    await loadRecipes('pizza');

    assert.ok(currentURL().includes('search=pizza'));
  });
});
