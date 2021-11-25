import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Recipe', function (hooks) {
  setupRenderingTest(hooks);

  this.recipe = {
    cooking_time: 75,
    id: '5ed6604591c37cdc054bcc54',
    image_url: 'http://forkify-api.herokuapp.com/images/seafoodpasta5075.jpg',
    ingredients: [{ quantity: 2, unit: 'tbsps', description: 'olive oil' }],
    publisher: 'The Pioneer Woman',
    servings: 4,
    source_url: 'http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/',
    title: 'Seafood Pasta',
  };

  test('it renders', async function (assert) {
    await render(hbs`<Recipe @recipe={{this.recipe}}/>`);

    assert.dom('.qa-recipe').exists();
    assert.dom('.qa-recipe-details-image-container').exists();
    assert.dom('.qa-recipe-details').exists();
    assert.dom('.qa-recipe-ingredients').exists();
    assert.dom('.qa-recipe-details-footer').exists();
  });
});
