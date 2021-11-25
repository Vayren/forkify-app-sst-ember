import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Recipe | Footer', function (hooks) {
  setupRenderingTest(hooks);

  this.publisher = 'The Pioneer Woman';
  this.sourceUrl = 'http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/';

  test('it renders', async function (assert) {
    await render(
      hbs`<Recipe::Footer @author={{this.publisher}} @url={{this.sourceUrl}}/>`
    );

    assert.dom('.qa-recipe-details-footer').exists();
    assert.dom('.qa-recipe-details-author').hasText(this.publisher);
    assert.dom('.qa-cooking-page').hasAttribute('href', this.sourceUrl);
  });
});
