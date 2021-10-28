import { Heading, Pane } from 'evergreen-ui';

import List from './List';
import { ListType } from 'types';
import { useEffect, useRef } from 'react';

const lists: ListType[] = [
  {
    id: 1,
    title: 'List 1',
    cards: [
      {
        id: 1,
        title: 'Card 1',
      },
    ],
  },
  {
    id: 2,
    title: 'List 1',
    cards: [
      {
        id: 1,
        title: 'Card 1',
      },
      {
        id: 2,
        title: 'Card 2',
      },
      {
        id: 3,
        title: 'Card 3',
      },
    ],
  },
  {
    id: 3,
    title: 'List 1',
    cards: [
      {
        id: 1,
        title: 'Card 1',
      },
    ],
  },
  {
    id: 4,
    title: 'List 1',
    cards: [
      {
        id: 1,
        title: 'Card 1',
      },
    ],
  },
  {
    id: 5,
    title: 'List 1',
    cards: [
      {
        id: 1,
        title: 'Card 1',
      },
    ],
  },
  {
    id: 6,
    title: 'List 1',
    cards: [
      {
        id: 1,
        title: 'Card 1',
      },
    ],
  },
  {
    id: 7,
    title: 'List 1',
    cards: [
      {
        id: 1,
        title: 'Card 1',
      },
    ],
  },
  {
    id: 8,
    title: 'List 1',
    cards: [
      {
        id: 1,
        title: 'Card 1',
      },
    ],
  },
  {
    id: 9,
    title: 'List 1',
    cards: [
      {
        id: 1,
        title: 'Card 1',
      },
    ],
  },
  {
    id: 10,
    title: 'List 1',
    cards: [
      {
        id: 1,
        title: 'Card 1',
      },
    ],
  },
];

function Group() {
  const listsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.dir();
  }, []);

  return (
    <Pane marginTop={24}>
      <Heading is="h2" size={800} marginBottom={24}>
        Group
      </Heading>

      <Pane
        ref={listsContainerRef}
        whiteSpace="nowrap"
        overflowX="scroll"
        height={`calc(100vh - 64px - 24px - 32px - 24px)`}
        display="flex"
        flexWrap="nowrap"
        gap={12}
        flexBasis={0}
      >
        {lists.map((list) => (
          <List key={list.id} {...list} />
        ))}
      </Pane>
    </Pane>
  );
}

export default Group;
