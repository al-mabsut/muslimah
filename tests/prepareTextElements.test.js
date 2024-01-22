import { prepareTextElements } from '../src/components/Content';
const { render } = require('@testing-library/preact');

describe('Parser', () => {
  it('renders a list correctly', () => {
    const text = ['Item 1', 'Item 2'];
    const { container } = render(prepareTextElements({ text }));
    
    expect(container.querySelectorAll('ul > li')).toHaveLength(text.length);
  });

  it('renders nested list correctly', () => {
    const text = ['Item 1', 'in:Subitem 1', 'in:Subitem 2', 'Item 2'];
    const { container } = render(prepareTextElements({ text, title: 'demo' }));
    
    expect(container.querySelectorAll('ul')).toHaveLength(2);
    expect(container.querySelectorAll('ul > ul')).toHaveLength(1);
    expect(container.querySelectorAll('ul')[0].children).toHaveLength(3); // 2li + 1ul
    expect(container.querySelectorAll('ul')[1].children).toHaveLength(2);
  });
  
  it('renders some nested lists correctly', () => {
    const text = ['Item 1', 'in:Subitem 1', 'in:Subitem 2', 'Item 2', 'in:Subitem2 1', 'in:Subitem2 2', 'in:Subitem2 3', 'Item 3'];
    const { container } = render(prepareTextElements({ text, title: 'demo' }));
    
    expect(container.querySelectorAll('ul')).toHaveLength(3);
    expect(container.querySelectorAll('ul > ul')).toHaveLength(2);
    expect(container.querySelectorAll('ul')[0].children).toHaveLength(5); // 3li + 2ul
    expect(container.querySelectorAll('ul')[1].children).toHaveLength(2);
    expect(container.querySelectorAll('ul')[2].children).toHaveLength(3);
  });
});
