import { createContext, useState } from 'react';
import { IContext, IModalProvider } from './types';

export const ModalContext = createContext<IContext>({} as IContext);

export const ModalContextProvider = ({ children }: IModalProvider) => {
  const [showCreatePostModal, setShowCreatePostModal] =
    useState<boolean>(false);

  const [showPostModal, setShowPostModal] = useState<boolean>(false);

  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        showCreatePostModal,
        setShowCreatePostModal,

        showPostModal,
        setShowPostModal,

        showAuthModal,
        setShowAuthModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
