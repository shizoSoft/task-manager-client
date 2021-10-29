import { Button, Heading, Pane, PlusIcon, Spinner } from 'evergreen-ui';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import List from './List';
import { GroupType, ListType } from 'types';
import axios from 'config/axios';
import { AxiosResponse } from 'axios';

function Group() {
  const [group, setGroup] = useState<GroupType | null>(null);
  const [groupLoading, setGroupLoading] = useState<boolean>(false);
  const [lists, setLists] = useState<ListType[]>([]);
  const [listsLoading, setListsLoading] = useState<boolean>(false);

  const params = useParams<{ groupId: string }>();

  useEffect(() => {
    setGroupLoading(true);

    axios({
      method: 'GET',
      url: `/groups/${params.groupId}`,
    })
      .then((res: AxiosResponse<GroupType>) => setGroup(res.data))
      .finally(() => setGroupLoading(false));

    setListsLoading(true);

    axios({
      method: 'GET',
      url: `/lists?_embed=cards&groupId=${params.groupId}`,
    })
      .then((res: AxiosResponse<ListType[]>) => setLists(res.data))
      .finally(() => setListsLoading(false));
  }, [params.groupId]);

  return (
    <Pane marginTop={24}>
      {groupLoading && <Spinner />}
      {group && !groupLoading && (
        <Heading is="h2" size={800} marginBottom={24}>
          {group.title}
        </Heading>
      )}

      {listsLoading && <Spinner />}
      {lists.length > 0 && !listsLoading && (
        <Pane
          whiteSpace="nowrap"
          paddingY={12}
          overflowX="scroll"
          height={`calc(100vh - 64px - 24px - 32px - 24px)`}
          display="flex"
          flexWrap="nowrap"
          gap={12}
          flexBasis={0}
        >
          {lists.map((list) => (
            <List key={list.id} lists={lists} {...list} />
          ))}
          <Button
            iconBefore={PlusIcon}
            minWidth={300}
            width={300}
            appearance="minimal"
          >
            Add
          </Button>
        </Pane>
      )}
    </Pane>
  );
}

export default Group;
