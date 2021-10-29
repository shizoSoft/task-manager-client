import { Heading, Pane, Spinner } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import GroupCard from './GroupCard';
import Section from './Section';
import styles from './Groups.module.css';
import axios from 'config/axios';
import { GroupType } from 'types';

function Groups() {
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [groupsLoading, setGroupsLoading] = useState<boolean>(false);

  useEffect(() => {
    setGroupsLoading(true);

    axios({
      method: 'GET',
      url: '/groups?_embed=lists',
    })
      .then((res: AxiosResponse<GroupType[]>) => setGroups(res.data))
      .finally(() => setGroupsLoading(false));
  }, []);

  const favoriteGroups = groups.filter(({ favorite }) => favorite);
  const myGroups = groups.filter(({ isMine }) => isMine);

  return (
    <Pane>
      <Heading is="h1" size={800} marginBottom={24}>
        Groups
      </Heading>

      {groupsLoading ? (
        <Spinner />
      ) : (
        <>
          <Section title="Favorite">
            <Pane className={styles.Grid}>
              {favoriteGroups.map((group) => (
                <GroupCard key={group.id} {...group} />
              ))}
            </Pane>
          </Section>

          <Section title="My Groups">
            <Pane className={styles.Grid}>
              {myGroups.map((group) => (
                <GroupCard key={group.id} {...group} />
              ))}
            </Pane>
          </Section>

          <Section title="Joined Groups">
            <Pane className={styles.Grid}>
              {groups.map((group) => (
                <GroupCard key={group.id} {...group} />
              ))}
            </Pane>
          </Section>
        </>
      )}
    </Pane>
  );
}

export default Groups;
