import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { loadRecipes } from 'frontend/tests/helpers/load-recipes';

module('Acceptance | Recipe list', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.recipes = this.server.createList('recipe', 10);

    await visit('/');

    await loadRecipes('pasta');
  });

  test('it displays recipeID in the URL when loads recipe', async function (assert) {
    const { id } = this.recipes[0];

    assert.equal(currentURL(), `/recipes/${id}?search=pasta`);
  });

  test('it displays appropriate recipe details when user selects different inline-recipes', async function (assert) {
    const { id: firstId, title: firstTitle } = this.recipes[0];
    const { id: thirdId, title: thirdTitle } = this.recipes[2];

    assert.equal(currentURL(), `/recipes/${firstId}?search=pasta`);
    assert.dom('.qa-recipe-details-title').hasText(firstTitle);

    await click('.qa-recipe-inline:nth-child(3) .qa-recipe-inline-link');

    assert.equal(currentURL(), `/recipes/${thirdId}?search=pasta`);
    assert.dom('.qa-recipe-details-title').hasText(thirdTitle);
  });
});
