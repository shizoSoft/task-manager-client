import { Button, Heading, Pane, PlusIcon, Spinner } from 'evergreen-ui';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import List from './List';
import { GroupType, ListType } from 'types';
import axios from 'config/axios';
import { AxiosResponse } from 'axios';
import AddCardModal from './AddCardModal';
import AddListModal from './AddListModal';

function Group() {
  const [group, setGroup] = useState<GroupType | null>(null);
  const [groupLoading, setGroupLoading] = useState<boolean>(false);
  const [lists, setLists] = useState<ListType[]>([]);
  const [listsLoading, setListsLoading] = useState<boolean>(false);
  const [newCardListId, setNewCardListId] = useState<number>(-1);
  const [addListModalVisible, setAddListModalVisible] =
    useState<boolean>(false);

  const params = useParams<{ groupId: string }>();

  useEffect(fetchLists, [params.groupId]);

  function fetchLists() {
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
  }

  function openAddCardModal(listId: number) {
    setNewCardListId(listId);
  }

  function closeAddCardModal() {
    setNewCardListId(-1);
  }

  function handleAddCard(cardData: { title: string }) {
    axios({
      method: 'POST',
      url: '/cards',
      data: {
        ...cardData,
        listId: newCardListId,
      },
    })
      .then(fetchLists)
      .finally(closeAddCardModal);
  }

  function handleDeleteCard(cardId: number) {
    axios({
      method: 'DELETE',
      url: `/cards/${cardId}`,
    }).then(fetchLists);
  }

  function openAddListModal() {
    setAddListModalVisible(true);
  }

  function closeAddListModal() {
    setAddListModalVisible(false);
  }

  function handleAddList(listData: { title: string }) {
    axios({
      method: 'POST',
      url: '/lists',
      data: {
        ...listData,
        groupId: params.groupId,
      },
    })
      .then(fetchLists)
      .finally(closeAddListModal);
  }

  return (
    <Pane marginTop={24}>
      <AddCardModal
        isShown={newCardListId !== -1}
        onClose={closeAddCardModal}
        onConfirm={handleAddCard}
      />
      <AddListModal
        isShown={addListModalVisible}
        onClose={closeAddListModal}
        onConfirm={handleAddList}
      />

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
            <List
              key={list.id}
              lists={lists}
              {...list}
              onAddCard={openAddCardModal}
              onDeleteCard={handleDeleteCard}
            />
          ))}
          <Button
            iconBefore={PlusIcon}
            minWidth={300}
            width={300}
            appearance="minimal"
            onClick={openAddListModal}
          >
            Add
          </Button>
        </Pane>
      )}
    </Pane>
  );
}

export default Group;
