import { BanktrixPage } from './app.po';

describe('banktrix App', function() {
  let page: BanktrixPage;

  beforeEach(() => {
    page = new BanktrixPage();
  });

  it('should display message saying BANKTRIX', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('BANKTRIX');
  });
});
