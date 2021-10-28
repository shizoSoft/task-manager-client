import { Card, Heading } from 'evergreen-ui';
import { Link } from 'react-router-dom';

import { theme } from 'config/theme';
import styles from './GroupCard.module.css';

interface GroupCardProps {
  id: number;
  title: string;
}

function GroupCard({ id, title }: GroupCardProps) {
  return (
    <Card
      className={styles.Card}
      is={Link}
      to={`/groups/${id}`}
      textDecoration="none"
      border
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Heading is="h3" size={800} fontWeight={700} color={theme.colors.gray800}>
        {title}
      </Heading>
    </Card>
  );
}

export default GroupCard;
