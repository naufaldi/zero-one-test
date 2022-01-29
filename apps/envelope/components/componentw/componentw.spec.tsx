import { render } from '@testing-library/react';

import Componentw from './componentw';

describe('Componentw', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Componentw />);
    expect(baseElement).toBeTruthy();
  });
});
