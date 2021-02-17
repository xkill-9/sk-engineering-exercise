import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import App from './App';

describe('<App>', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
