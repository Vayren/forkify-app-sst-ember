import { helper } from '@ember/component/helper';

export default helper(function limitRecipeTitle([title, limit = 27]) {
  const newTitle = [];

  if (title.length > limit) {
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) newTitle.push(cur);
      return acc + cur.length;
    }, 0);

    return newTitle.join(' ') + ' ...';
  }

  return title;
});
