import { click, fillIn } from '@ember/test-helpers';

export async function loadRecipes(category) {
  await fillIn('.qa-search-field', category);
  await click('.qa-submit-search');
}
