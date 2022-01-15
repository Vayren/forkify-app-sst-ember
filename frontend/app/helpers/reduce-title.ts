import { helper } from '@ember/component/helper';

export default helper(function reduceTitle([title, limit = 27]: [
  string,
  number
]) {
  const newTitle: string[] = [];

  if (title.length > limit) {
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) newTitle.push(cur);
      return acc + cur.length;
    }, 0);

    return newTitle.join(' ') + ' ...';
  }

  return title;
});
