import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders header for non-block usage', async function (assert) {
    await render(hbs`<Header />`);

    assert.dom('.qa-header').exists();
  });

  test('it renders header for block usage', async function (assert) {
    await render(hbs`
      <Header>
        header block text
      </Header>
    `);

    assert.equal(this.element.textContent.trim(), 'header block text');
  });
});
