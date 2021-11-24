import { Serializer } from 'ember-cli-mirage';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  serialize() {
    const response = Serializer.prototype.serialize.apply(this, arguments);

    return { data: response };
  },
});
