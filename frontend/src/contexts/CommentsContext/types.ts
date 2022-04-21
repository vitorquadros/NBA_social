import { Reply } from '../../types/Post';

export interface ParentCommentInfo {
  id: string;
  text: string;
  createdAt: string;
  owner: { displayName: string; avatar: string };
}

export interface IContext {
  currentReplies: Reply[];
  setCurrentReplies: React.Dispatch<React.SetStateAction<Reply[]>>;
  isReplying: boolean;
  setIsReplying: React.Dispatch<React.SetStateAction<boolean>>;
  parentCommentInfo: any;
  setParentCommentInfo: React.Dispatch<any>;
}

export interface ICommentsProvider {
  children: JSX.Element;
}
