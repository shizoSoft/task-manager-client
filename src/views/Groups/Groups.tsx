import { Heading, Pane } from 'evergreen-ui';

import GroupCard from './GroupCard';
import Section from './Section';
import styles from './Groups.module.css';

function Groups() {
  return (
    <Pane>
      <Heading is="h1" size={800} marginBottom={24}>
        My Groups
      </Heading>

      <Section title="Favorite">
        <Pane className={styles.Grid}>
          {new Array(3).fill(undefined).map((_, index) => (
            <GroupCard key={index} id={index} title={`Group ${index}`} />
          ))}
        </Pane>
      </Section>

      <Section title="My Groups">
        <Pane className={styles.Grid}>
          {new Array(3).fill(undefined).map((_, index) => (
            <GroupCard key={index} id={index} title={`Group ${index}`} />
          ))}
        </Pane>
      </Section>

      <Section title="Joined Groups">
        <Pane className={styles.Grid}>
          {new Array(3).fill(undefined).map((_, index) => (
            <GroupCard key={index} id={index} title={`Group ${index}`} />
          ))}
        </Pane>
      </Section>
    </Pane>
  );
}

export default Groups;
