import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | Recipe | Ingredients | Ingredient',
  function (hooks) {
    setupRenderingTest(hooks);

    this.ingredient = {
      quantity: 2,
      unit: 'g',
      description: 'some text',
    };

    test('it renders', async function (assert) {
      await render(hbs`<Recipe::Ingredients::Ingredient
        @count={{this.ingredient.quantity}}
        @unit={{this.ingredient.unit}}
        @description={{this.ingredient.description}}
      />`);

      assert.dom('.qa-ingredient').exists();
      assert.dom('.qa-ingredient-count').hasText(`${this.ingredient.quantity}`);
      assert
        .dom('.qa-ingredient-description')
        .hasText(`${this.ingredient.unit} ${this.ingredient.description}`);
    });
  }
);
