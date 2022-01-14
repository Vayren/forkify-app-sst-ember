import ApplicationAdapter from 'frontend/pods/application/adapter';

export default class RecipeAdapter extends ApplicationAdapter {
  shouldReloadRecord() {
    return true;
  }
}
