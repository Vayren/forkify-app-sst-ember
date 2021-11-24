import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | WishlistItem', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onRemove = sinon.fake();
  });

  test('it renders', async function (assert) {
    await render(hbs`<WishlistItem @remove={{this.onRemove}}/>`);

    assert.dom('.qa-wishlist-item').exists();
  });

  test('it renders recipe details', async function (assert) {
    this.recipe = {
      id: '1',
      imageUrl: 'url',
      title: 'Carbonara',
      publisher: 'author',
    };
    this.category = 'pasta';

    await render(
      hbs`
      <WishlistItem
        @recipe={{this.recipe}}
        @category={{this.title}}
        @remove={{this.onRemove}}
      />`
    );

    assert
      .dom('.qa-wishlist-item-image')
      .hasAttribute('src', this.recipe.imageUrl);
    assert
      .dom('.qa-wishlist-item-image')
      .hasAttribute('alt', this.recipe.title);
    assert.dom('.qa-wishlist-item-title').hasText(this.recipe.title);
    assert.dom('.qa-wishlist-item-publisher').hasText(this.recipe.publisher);
  });

  test('it calls onRemove when heart icon clicked', async function (assert) {
    await render(hbs`<WishlistItem @remove={{this.onRemove}} />`);

    await click('.qa-wishlist-item-like-button');

    assert.ok(this.onRemove.calledOnce);
  });
});
