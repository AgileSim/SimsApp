import { Banktrix } from './app.po';

describe('banktrix App', function() {
  let page: Banktrix;

  beforeEach(() => {
    page = new Banktrix();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
