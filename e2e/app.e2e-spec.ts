import { KlxcPage } from './app.po';

describe('klxc App', function() {
  let page: KlxcPage;

  beforeEach(() => {
    page = new KlxcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
