import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | Recipe | Details', function (hooks) {
  setupRenderingTest(hooks);

  this.servings = 5;
  this.time = 60;
  this.onAdd = sinon.fake();
  this.onRemove = sinon.fake();
  this.find = sinon.fake();

  test('it renders', async function (assert) {
    await render(hbs`<Recipe::Details
      @servings={{this.servings}}
      @time={{this.time}}
      @addToWishlist={{this.onAdd}}
      @removeFromWishlist={{this.onRemove}}
      @findRecipe={{this.find}}
    />`);

    assert.dom('.qa-recipe-details').exists();
    assert.dom('.qa-recipe-servings').hasText(`${this.servings}`);
    assert.dom('.qa-cooking-time').hasText(`${this.time}`);
  });
});
