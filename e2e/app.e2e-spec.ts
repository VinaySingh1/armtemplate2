import { CognitiveVisionSamplePage } from './app.po';

describe('cognitive-vision-sample App', () => {
  let page: CognitiveVisionSamplePage;

  beforeEach(() => {
    page = new CognitiveVisionSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
