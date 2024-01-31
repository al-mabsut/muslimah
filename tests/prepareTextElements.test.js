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
  
  it('renders some complexe nested lists correctly', () => {
    const text = ['Item 1', 'in:Subitem 1', 'in:Subitem 2', 'Item 2', 'in:Subitem2 1', 'in:in:SubItem 2 2 1', 'in:Subitem2 2', 'in:Subitem2 3', 'Item 3'];

    /*
      Item 1 -> main ul
        Subitem 1 -> first ul
        SubItem 2
      Item 2
        Subitem 2 1 -> second ul
          SubItem 2 2 1 -> third ul
        subitem 2 2
        subitem 2 3
      Item 3
    */
    const { container } = render(prepareTextElements({ text, title: 'demo' }));
    
    expect(container.querySelectorAll('ul')).toHaveLength(4);
    expect(container.querySelectorAll('ul > ul')).toHaveLength(3);
    expect(container.querySelectorAll('ul')[0].children).toHaveLength(5); // 3li + 2ul
    expect(container.querySelectorAll('ul')[1].children).toHaveLength(2);
    expect(container.querySelectorAll('ul')[2].children).toHaveLength(4);
  });

  it('handles a list with no main items correctly', () => {
    const text = ['in:Subitem 1', 'in:Subitem 2'];
    const { container } = render(prepareTextElements({ text, title: 'demo' }));

    expect(container.querySelectorAll('ul')).toHaveLength(2); // the main ul must be there
    expect(container.querySelectorAll('ul > li')).toHaveLength(2);
  });
});
