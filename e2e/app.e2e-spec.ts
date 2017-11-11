import { WebUnibancaPage } from './app.po';

describe('web-unibanca App', function() {
  let page: WebUnibancaPage;

  beforeEach(() => {
    page = new WebUnibancaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
