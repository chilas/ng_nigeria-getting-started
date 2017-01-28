import { NgQuickstartCliPage } from './app.po';

describe('ng-quickstart-cli App', function() {
  let page: NgQuickstartCliPage;

  beforeEach(() => {
    page = new NgQuickstartCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
