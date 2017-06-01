import { Te6Page } from './app.po';

describe('te6 App', () => {
  let page: Te6Page;

  beforeEach(() => {
    page = new Te6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
