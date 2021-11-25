import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Recipe | Ingredients', function (hooks) {
  setupRenderingTest(hooks);

  this.ingredients = [
    { quantity: 85, unit: 'g', description: 'minced veal or pork' },
    {
      quantity: 85,
      unit: 'g',
      description: 'chicken livers cleaned and chopped if large',
    },
    { quantity: 85, unit: 'g', description: 'frozen peas' },
  ];

  test('it renders', async function (assert) {
    await render(hbs`<Recipe::Ingredients @ingredients={{this.ingredients}}/>`);

    assert.dom('.qa-recipe-ingredients').exists();
  });

  test('it displays ingredients', async function (assert) {
    await render(hbs`<Recipe::Ingredients @ingredients={{this.ingredients}}/>`);

    assert.dom('.qa-ingredient').exists({ count: 3 });
  });
});
