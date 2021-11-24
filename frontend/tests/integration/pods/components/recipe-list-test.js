import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | RecipeList', function (hooks) {
  setupRenderingTest(hooks);

  this.recipes = [
    {
      id: '1',
      imageUrl: 'url',
      title: 'Carbonara',
      publisher: 'author',
    },
    {
      id: '2',
      imageUrl: 'url',
      title: 'Pasta',
      publisher: 'author',
    },
    {
      id: '3',
      imageUrl: 'url',
      title: 'Carbonara',
      publisher: 'author',
    },
  ];

  test('it renders', async function (assert) {
    await render(hbs`<RecipeList @recipes={{this.recipes}}/>`);

    assert.dom('.qa-recipe-list').exists();
  });

  test('it renders recipes', async function (assert) {
    await render(hbs`<RecipeList @recipes={{this.recipes}}/>`);

    assert.dom('.qa-recipe-inline').exists({ count: 3 });
  });
});
