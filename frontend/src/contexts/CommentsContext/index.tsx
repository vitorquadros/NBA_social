import { createContext, useState } from 'react';
import { Reply } from '../../types/Post';
import { IContext, ICommentsProvider, ParentCommentInfo } from './types';

export const CommentsContext = createContext<IContext>({} as IContext);

export const CommentsContextProvider = ({ children }: ICommentsProvider) => {
  const [currentReplies, setCurrentReplies] = useState<Reply[]>([]);
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [parentCommentInfo, setParentCommentInfo] = useState<ParentCommentInfo>(
    {} as ParentCommentInfo
  );

  return (
    <CommentsContext.Provider
      value={{
        currentReplies,
        setCurrentReplies,

        isReplying,
        setIsReplying,

        parentCommentInfo,
        setParentCommentInfo
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
