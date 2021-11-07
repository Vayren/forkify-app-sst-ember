import { helper } from '@ember/component/helper';

export default helper(function capitalize([title]) {
  return title[0].toUpperCase() + title.slice(1);
});
