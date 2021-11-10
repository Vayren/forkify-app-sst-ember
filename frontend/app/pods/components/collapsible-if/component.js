import Component from '@glimmer/component';
import { fadeOut, fadeIn } from 'ember-animated/motions/opacity';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CollapsibleIfComponent extends Component {
  @tracked isVisible = true;
  @tracked isAnimating = false;

  @action
  toggleContent() {
    this.isVisible = !this.isVisible;
  }

  @action
  *fade({ removedSprites, insertedSprites }) {
    const [removedSprite] = removedSprites;
    const [insertedSprite] = insertedSprites;

    this.isAnimating = true;

    if (removedSprite) {
      yield fadeOut(removedSprite);
    }

    if (insertedSprite) {
      yield fadeIn(insertedSprite);
    }

    this.isAnimating = false;
  }
}
