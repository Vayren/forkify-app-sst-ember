import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { loadRecipes } from 'frontend/tests/helpers/load-recipes';

module('Acceptance | Recipe list', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.recipes = this.server.createList('recipe', 20);

    await visit('/');

    await loadRecipes('pasta');
  });

  test('it loads recipes', async function (assert) {
    assert.dom('.qa-recipe-list').exists();
    assert.dom('.qa-recipe-inline').exists({ count: 10 });
    assert.ok(currentURL().includes('search=pasta'));
  });

  // TODO: write test for pagination

  test('it displays recipe details', async function (assert) {
    const { id: firstId, title: firstTitle } = this.recipes[0];
    const { id: thirdId, title: thirdTitle } = this.recipes[2];

    assert.equal(currentURL(), `/recipes/${firstId}?search=pasta`);
    assert.dom('.qa-recipe-details-title').hasText(firstTitle);

    await click('.qa-recipe-inline:nth-child(3) .qa-recipe-inline-link');

    assert.equal(currentURL(), `/recipes/${thirdId}?search=pasta`);
    assert.dom('.qa-recipe-details-title').hasText(thirdTitle);
  });
});
