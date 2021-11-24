import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Header />`);

    assert.dom('.qa-header').exists();
  });

  test('it renders children component', async function (assert) {
    await render(hbs`
      <Header>text</Header>
    `);

    assert.equal(this.element.textContent.trim(), 'text');
  });
});
