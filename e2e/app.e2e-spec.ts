import { QAFrontPage } from './app.po';

describe('qafront App', function() {
  let page: QAFrontPage;

  beforeEach(() => {
    page = new QAFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
