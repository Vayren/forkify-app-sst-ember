import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  click,
  currentRouteName,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { loadRecipes } from 'frontend/tests/helpers/load-recipes';

module('Acceptance | Wishlist', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.recipe = this.server.createList('recipe', 10);

    await visit('/');

    await loadRecipes('pasta');

    await click('.qa-like-button');
  });

  hooks.afterEach(function () {
    localStorage.clear();
  });

  test('it adds recipe to wishlist', async function (assert) {
    await visit('/wishlist');

    assert.ok(currentRouteName(), 'recipes.recipe');
    assert.dom('.qa-wishlist-item').exists();
  });

  test('it visits recipe page from wishlist', async function (assert) {
    const recipeId = this.recipe[0].id;

    await visit('/wishlist');

    await click('.qa-wishlist-link');

    assert.equal(currentURL(), `/recipes/${recipeId}?search=pasta`);
  });

  test('it removes recipe from wishlist', async function (assert) {
    await visit('/wishlist');

    await click('.qa-wishlist-item-like-button');

    assert.dom('.qa-wishlist-item').doesNotExist();
    assert.equal(localStorage.getItem('wishlist'), JSON.stringify({}));
  });

  test('it removes category if it is empty', async function (assert) {
    await visit('/wishlist');

    await click('.qa-wishlist-item-like-button');

    assert.dom('.qa-collapsible-title').doesNotExist();
  });
});
