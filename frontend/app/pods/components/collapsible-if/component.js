import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CollapsibleIfComponent extends Component {
  @tracked isVisible = true;

  @action
  toggleContent() {
    this.isVisible = !this.isVisible;
  }
}
