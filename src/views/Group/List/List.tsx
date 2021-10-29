import {
  Card,
  Heading,
  Pane,
  IconButton,
  MoreIcon,
  PlusIcon,
  Button,
  Popover,
  Menu,
} from 'evergreen-ui';

import { ListType } from 'types';
import TaskCard from './TaskCard';

interface ListProps extends ListType {
  lists: ListType[];
  onAddCard: (listId: number) => void;
  onDeleteCard: (cardId: number) => void;
}

function List({ id, title, cards, lists, onAddCard, onDeleteCard }: ListProps) {
  return (
    <Card
      border
      paddingX={18}
      paddingY={12}
      width={300}
      flexShrink={0}
      height="fit-content"
    >
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={12}
      >
        <Heading is="h3" size={700}>
          {title}
        </Heading>

        <Pane>
          <Popover
            position="bottom-left"
            content={
              <Menu>
                <Menu.Item>Edit</Menu.Item>
                <Menu.Item intent="danger">Delete</Menu.Item>
              </Menu>
            }
          >
            <IconButton icon={MoreIcon} appearance="minimal" />
          </Popover>
        </Pane>
      </Pane>
      <Pane display="flex" flexDirection="column" gap={12}>
        {cards.map((card) => (
          <TaskCard
            key={card.id}
            lists={lists}
            {...card}
            onDelete={onDeleteCard}
          />
        ))}

        <Button
          appearance="minimal"
          iconBefore={PlusIcon}
          onClick={() => onAddCard(id)}
        >
          Add
        </Button>
      </Pane>
    </Card>
  );
}

export default List;
