import { NgformsMostPage } from './app.po';

describe('ngforms-most App', () => {
  let page: NgformsMostPage;

  beforeEach(() => {
    page = new NgformsMostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
