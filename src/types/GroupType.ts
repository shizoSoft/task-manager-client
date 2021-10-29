import { ListType } from './ListType';

export interface GroupType {
  id: number;
  title: string;
  lists: ListType[];
  favorite: boolean;
  isMine: boolean;
}
