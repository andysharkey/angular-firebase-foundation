import { BlazePage } from './app.po';

describe('blaze App', function() {
  let page: BlazePage;

  beforeEach(() => {
    page = new BlazePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
