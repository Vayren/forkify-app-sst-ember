import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | PaginationButton', function (hooks) {
  setupRenderingTest(hooks);

  this.onClick = sinon.fake();

  test('it renders', async function (assert) {
    await render(hbs`
      <PaginationButton
        @onClick={{this.onClick}}
      />`);

    assert.dom('.qa-pagination-button').exists();
  });
});
