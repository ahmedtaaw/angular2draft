import { MyreactiveformPage } from './app.po';

describe('myreactiveform App', () => {
  let page: MyreactiveformPage;

  beforeEach(() => {
    page = new MyreactiveformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
