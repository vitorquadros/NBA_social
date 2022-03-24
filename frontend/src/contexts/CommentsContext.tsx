import { createContext, ReactNode, useState } from 'react';

const initialValue = {
  isReply: false,
  setIsReply: () => {}
};

type ModalContextProps = {
  children: ReactNode;
};

type CommentsContextTypes = {
  isReply: boolean;
  setIsReply: (state: boolean) => void;
};

export const CommentsContext =
  createContext<CommentsContextTypes>(initialValue);

export const CommentsContextProvider = ({ children }: ModalContextProps) => {
  const [isReply, setIsReply] = useState<boolean>(initialValue.isReply);

  return (
    <CommentsContext.Provider value={{ isReply, setIsReply }}>
      {children}
    </CommentsContext.Provider>
  );
};
