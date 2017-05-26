import { AuthSystemPage } from './app.po';

describe('auth-system App', () => {
  let page: AuthSystemPage;

  beforeEach(() => {
    page = new AuthSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
