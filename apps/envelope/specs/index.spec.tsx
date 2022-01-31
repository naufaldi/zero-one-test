import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from '../pages/index';
import { RecoilRoot } from 'recoil';

// jest test for apps\envelope\pages\index.tsx
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
describe('render text and anchor view report', () => {
  it('should render successfully', () => {
    const { getByText } = render(
      <RecoilRoot>
        <Index />
      </RecoilRoot>
    );
    expect(getByText('View Report')).toBeTruthy();
    expect(screen.getByText('View Report').closest('a')).toHaveAttribute(
      'href',
      'https://www.google.com'
    );
  });
});

// RTL ways

// test('alert message', async () => {
//   render(
//     <RecoilRoot>
//       <Index />
//     </RecoilRoot>
//   );

//   // Click button
//   fireEvent.click(screen.getByText('Sign In'));

//   // Wait for page to update with query text
//   const alertItem = await screen.findByRole('alert');
//   expect(alertItem).toBeTruthy();
// });
