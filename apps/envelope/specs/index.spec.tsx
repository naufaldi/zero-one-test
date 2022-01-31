import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';
import { RecoilRoot } from 'recoil';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RecoilRoot>
        <Index />
      </RecoilRoot>
    );
    expect(baseElement).toBeTruthy();
  });
});
