import { NgPhotoPage } from './app.po';

describe('ng-photo App', function() {
  let page: NgPhotoPage;

  beforeEach(() => {
    page = new NgPhotoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
