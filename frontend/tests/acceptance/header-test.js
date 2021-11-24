import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  currentRouteName,
  click,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { loadRecipes } from 'frontend/tests/helpers/load-recipes';

module('Acceptance | Header', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it redirects to index route', async function (assert) {
    this.server.createList('recipe', 10);

    await visit('/');

    await loadRecipes('pasta');

    await click('.qa-logo');

    assert.ok(currentURL(), '/');
    assert.ok(currentRouteName(), 'index');
  });

  test('it redirects to wishlist', async function (assert) {
    await visit('/');

    await click('.qa-wishlist-icon');

    assert.ok(currentURL(), '/wishlist');
    assert.ok(currentRouteName(), 'wishlist');
  });

  test('it redirects to cart', async function (assert) {
    await visit('/');

    await click('.qa-cart-icon');

    assert.ok(currentURL(), '/shopping-cart');
    assert.ok(currentRouteName(), 'cart');
  });
});
