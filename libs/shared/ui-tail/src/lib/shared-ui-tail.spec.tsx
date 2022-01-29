import { render } from '@testing-library/react';

import SharedUiTail from './shared-ui-tail';

describe('SharedUiTail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiTail />);
    expect(baseElement).toBeTruthy();
  });
});
