import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Recipe | Image', function (hooks) {
  setupRenderingTest(hooks);

  this.title = 'Seafood Pasta';
  this.url = 'http://forkify-api.herokuapp.com/images/seafoodpasta5075.jpg';

  test('it renders', async function (assert) {
    await render(hbs`<Recipe::Image @url={{this.url}} @title={{this.title}}/>`);

    assert.dom('.qa-recipe-details-image-container').exists();
    assert.dom('.qa-recipe-details-title').hasText(this.title);
    assert.dom('.qa-recipe-details-image').hasAttribute('src', this.url);
    assert.dom('.qa-recipe-details-image').hasAttribute('alt', this.title);
  });
});
