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

  test('it adds recipes to wishlist', async function (assert) {
    await visit('/wishlist');

    assert.dom('.qa-wishlist-item').exists();
  });

  test('it redirects to recipe page', async function (assert) {
    await visit('/wishlist');

    await click('.qa-wishlist-link');

    assert.ok(currentRouteName(), 'recipes.recipe');
  });

  test('it shows search param in the URL', async function (assert) {
    await visit('/wishlist');

    await click('.qa-wishlist-link');

    assert.ok(currentURL().includes('search=pasta'));
  });

  test('it removes item from wishlist', async function (assert) {
    await visit('/wishlist');

    await click('.qa-wishlist-item-like-button');

    assert.dom('.qa-wishlist-item').doesNotExist();
    assert.equal(localStorage.getItem('wishlist'), JSON.stringify({}));
  });

  test('it removes title category if category is empty', async function (assert) {
    await visit('/wishlist');

    await click('.qa-wishlist-item-like-button');

    assert.dom('.qa-collapsible-title').doesNotExist();
  });
});
