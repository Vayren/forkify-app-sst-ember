import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | RecipeInline', function (hooks) {
  setupRenderingTest(hooks);

  this.recipe = {
    id: '1',
    imageUrl: 'url',
    title: 'Carbonara',
    publisher: 'author',
  };

  test('it renders', async function (assert) {
    await render(hbs`<RecipeInline @recipe={{this.recipe}} />`);

    assert.dom('.qa-recipe-inline').exists();
  });

  test('it renders recipe-inline details', async function (assert) {
    await render(hbs`<RecipeInline @recipe={{this.recipe}} />`);

    assert
      .dom('.qa-recipe-inline-image')
      .hasAttribute('src', this.recipe.imageUrl);
    assert
      .dom('.qa-recipe-inline-image')
      .hasAttribute('alt', this.recipe.title);
    assert.dom('.qa-recipe-inline-title').hasText(this.recipe.title);
    assert.dom('.qa-recipe-inline-publisher').hasText(this.recipe.publisher);
  });
});
