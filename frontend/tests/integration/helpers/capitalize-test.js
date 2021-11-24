import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | capitalize', function (hooks) {
  setupRenderingTest(hooks);

  test('it makes first letter capital', async function (assert) {
    this.title = 'test';

    await render(hbs`{{capitalize this.title}}`);

    assert.equal(this.element.textContent.trim(), 'Test');
  });
});
