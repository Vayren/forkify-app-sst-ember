import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title: faker.name.title(),
  imageUrl: faker.image.imageUrl(),
  publisher: faker.name.findName(),
  sourceUrl: faker.internet.url(),
  servings: faker.random.number(),
  cookingTime: faker.random.number(),
  ingredients: createIngredients(),
});

function createIngredients(ingredientsNum = 5) {
  return Array(ingredientsNum).fill('').map(createIngredient);
}

function createIngredient() {
  return {
    quantity: faker.random.number(),
    unit: faker.datatype.string(),
    description: faker.lorem.text(),
  };
}
