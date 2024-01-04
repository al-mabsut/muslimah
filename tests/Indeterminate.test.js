const { render } = require('@testing-library/preact');
const { Indeterminate } = require('@al-mabsut/muslimah');

describe('Indeterminate', () => {
  it('should work as expected', () => {
    expect(Indeterminate).toBeDefined();
  });

  it('renders without crashing', () => {
    const preact = require('preact');
    const component = preact.createElement(Indeterminate, { scenario: 'initial-bleeding' });
    const { container } = render(component);
    expect(container).toBeTruthy();
  });
});
