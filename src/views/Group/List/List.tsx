import { Card, Heading, Pane } from 'evergreen-ui';

import { ListType } from 'types';
import TaskCard from './TaskCard';

function List({ title, cards }: ListType) {
  return (
    <Card
      border
      paddingX={18}
      paddingY={12}
      width={300}
      flexShrink={0}
      height="fit-content"
    >
      <Heading is="h3" size={700} marginBottom={12}>
        {title}
      </Heading>
      <Pane display="flex" flexDirection="column" gap={12}>
        {cards.map((card) => (
          <TaskCard key={card.id} {...card} />
        ))}
      </Pane>
    </Card>
  );
}

export default List;
