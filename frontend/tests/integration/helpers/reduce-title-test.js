import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | reduce-title', function (hooks) {
  setupRenderingTest(hooks);

  test("it doesn't render 3 dots at the and of the title if it less then 27 chars", async function (assert) {
    this.title = 'Lobster Pasta';

    await render(hbs`{{reduce-title this.title}}`);

    assert.equal(this.element.textContent.trim(), 'Lobster Pasta');
  });

  test('it renders 3 dots at the end of the title if it is more than 27 chars', async function (assert) {
    this.title = 'Pasta ncasciata (Aubergine wrapped pasta dome)';

    await render(hbs`{{reduce-title this.title}}`);

    assert.equal(
      this.element.textContent.trim(),
      'Pasta ncasciata (Aubergine ...'
    );
  });
});
