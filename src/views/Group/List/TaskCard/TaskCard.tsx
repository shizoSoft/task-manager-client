import {
  Card,
  Heading,
  IconButton,
  MoreIcon,
  Pane,
  Menu,
  Popover,
  SelectMenu,
} from 'evergreen-ui';

import { CardType, ListType } from 'types';
import { theme } from 'config/theme';

interface TaskCardProps extends CardType {
  lists: ListType[];
  onDelete: (cardId: number) => void;
}

function TaskCard({ id, title, lists, onDelete }: TaskCardProps) {
  return (
    <Card
      border
      padding={12}
      height={120}
      backgroundColor={theme.colors.gray200}
    >
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={12}
      >
        <Heading is="h3" size={500} fontWeight={700}>
          {title}
        </Heading>

        <Pane>
          <Popover
            position="bottom-left"
            content={
              <Menu>
                <Menu.Item>Edit</Menu.Item>
                <SelectMenu
                  title="Select list"
                  options={lists.map(({ title, id }) => ({
                    label: title,
                    value: id,
                  }))}
                >
                  <Menu.Item>Move to</Menu.Item>
                </SelectMenu>
                <Menu.Item intent="danger" onSelect={() => onDelete(id)}>
                  Delete
                </Menu.Item>
              </Menu>
            }
          >
            <IconButton icon={MoreIcon} appearance="minimal" />
          </Popover>
        </Pane>
      </Pane>
    </Card>
  );
}

export default TaskCard;
