import { parser } from '../plugins/markdown_plugin';

describe('Parser', () => {
  it('Empty md', () => {
    expect(() => parser()).toThrowError();
  });

  test('No title', () => {
    const mdString = '## h2\n- paragraph\n  - inparagraph';
    expect(() => parser(mdString)).toThrowError();
  });

  test('No h2', () => {
    const mdString = '# Ruling: h1 title\n \n- paragraph\n  - inparagraph';
    expect(() => parser(mdString)).toThrowError();
  });
  
  test('Wrong title', () => {
    const mdString = '# Title \n## h2\n- paragraph\n  - inparagraph';
    expect(() => parser(mdString)).toThrowError();
  });
  
  test('No paragraph', () => {
    const mdString = '# Ruling: h1 title\n## h2\n';
    const expectedResult = {
      title: 'h1 title',
      h2: []
    };

    const result = parser(mdString);
    expect(result).toEqual(expectedResult);
  });

  test('Should convert simple markdown to JSON', () => {
    const mdString = '# Ruling: h1 title\n## pHead\n- paragraph\n - 2paragraph';
    const expectedResult = {
      title: 'h1 title',
      pHead: ['paragraph', '2paragraph']
    };

    const result = parser(mdString);
    expect(result).toEqual(expectedResult);
  });
  
  test('Should convert inner list markdown to JSON', () => {
    const mdString = '# Ruling: h1 title\n## paragraph1\n- paragraph in 1\n  - inparagraph in 1 \n ## paragraph2\n - paragraph in 2';
    const expectedResult = {
      title: 'h1 title',
      paragraph1: ['paragraph in 1', 'in:inparagraph in 1'],
      paragraph2: ['paragraph in 2']
    };

    const result = parser(mdString);
    expect(result).toEqual(expectedResult);
  });
});
