import { Tesla2Page } from './app.po';

describe('tesla2 App', function() {
  let page: Tesla2Page;

  beforeEach(() => {
    page = new Tesla2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
