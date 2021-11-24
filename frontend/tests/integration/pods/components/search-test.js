import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | Search', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onInput = sinon.fake();
    this.onSubmit = (event) => event.preventDefault();
  });

  test('it renders', async function (assert) {
    await render(hbs`<Search
      @onInput={{this.onInput}}
      @onSubmit={{this.onSubmit}}
    />`);

    assert.dom('.qa-search-form').exists();
  });

  test('it displays text after typing in search field', async function (assert) {
    await render(hbs`<Search
      @onInput={{this.onInput}}
      @onSubmit={{this.onSubmit}}
      />`);

    await fillIn('.qa-search-field', 'pasta');

    assert.dom('.qa-search-field').hasValue('pasta');
  });
});
