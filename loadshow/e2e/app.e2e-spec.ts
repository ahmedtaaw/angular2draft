import { LoadshowPage } from './app.po';

describe('loadshow App', () => {
  let page: LoadshowPage;

  beforeEach(() => {
    page = new LoadshowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
