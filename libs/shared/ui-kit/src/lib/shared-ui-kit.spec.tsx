import { render } from '@testing-library/react';

import SharedUiKit from './shared-ui-kit';

describe('SharedUiKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiKit />);
    expect(baseElement).toBeTruthy();
  });
});
