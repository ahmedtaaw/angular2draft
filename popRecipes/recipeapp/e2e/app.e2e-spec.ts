import { RecipeappPage } from './app.po';

describe('recipeapp App', () => {
  let page: RecipeappPage;

  beforeEach(() => {
    page = new RecipeappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
