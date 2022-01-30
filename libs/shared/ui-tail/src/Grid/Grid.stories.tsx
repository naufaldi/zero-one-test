// Button.stories.ts|tsx

import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Grid, GridProps } from './Grid';

export default {
  title: 'Grid',
  component: Grid,
} as Meta;

export const GridDefault = () => (
  <Grid>
    {' '}
    <div className="col-span-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, natus
      eveniet suscipit ab totam magnam quod voluptas ipsa velit quisquam,
      accusantium quo at dolorum nulla inventore, accusamus pariatur! Quas,
      placeat.
    </div>
    <div className="col-span-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, natus
      eveniet suscipit ab totam magnam quod voluptas ipsa velit quisquam,
      accusantium quo at dolorum nulla inventore, accusamus pariatur! Quas,
      placeat.
    </div>
    <div className="col-span-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, natus
      eveniet suscipit ab totam magnam quod voluptas ipsa velit quisquam,
      accusantium quo at dolorum nulla inventore, accusamus pariatur! Quas,
      placeat.
    </div>
  </Grid>
);
GridDefault.storyName = 'Grid Default';

export const GridClass = () => (
  <Grid className="gap-x-4">
    {' '}
    <div className="col-span-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, natus
      eveniet suscipit ab totam magnam quod voluptas ipsa velit quisquam,
      accusantium quo at dolorum nulla inventore, accusamus pariatur! Quas,
      placeat.
    </div>
    <div className="col-span-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, natus
      eveniet suscipit ab totam magnam quod voluptas ipsa velit quisquam,
      accusantium quo at dolorum nulla inventore, accusamus pariatur! Quas,
      placeat.
    </div>
    <div className="col-span-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, natus
      eveniet suscipit ab totam magnam quod voluptas ipsa velit quisquam,
      accusantium quo at dolorum nulla inventore, accusamus pariatur! Quas,
      placeat.
    </div>
  </Grid>
);
GridClass.storyName = 'Add Tailwind Class';
