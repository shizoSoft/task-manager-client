import { Card, Heading } from 'evergreen-ui';

import { CardType } from 'types';
import { theme } from 'config/theme';

function TaskCard({ title }: CardType) {
  return (
    <Card
      border
      padding={12}
      height={120}
      backgroundColor={theme.colors.gray200}
    >
      <Heading is="h3" size={500} fontWeight={700}>
        {title}
      </Heading>
    </Card>
  );
}

export default TaskCard;
