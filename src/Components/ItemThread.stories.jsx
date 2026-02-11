import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ItemThread from './ItemThread';

export default {
  title: 'Forum/ItemThread',
  component: ItemThread,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const DefaultItemThread = {
  args: {
    id: 'thread-1',
    category: 'react',
    title: 'Bagaimana cara menggunakan Redux Toolkit?',
    desc: 'Saya masih bingung perbedaan Redux biasa dengan Redux Toolkit.',
    like: 10,
    unlike: 2,
    comment: 5,
    time: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    author: 'Rizal Abimanyu',
  },
};
