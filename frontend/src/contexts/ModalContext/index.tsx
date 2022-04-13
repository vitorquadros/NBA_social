import { createContext, useState } from 'react';
import { IContext, IModalProvider } from './types';

export const ModalContext = createContext<IContext>({} as IContext);

export const ModalContextProvider = ({ children }: IModalProvider) => {
  const [showCreatePostModal, setShowCreatePostModal] =
    useState<boolean>(false);

  const [showPostModal, setShowPostModal] = useState<boolean>(false);

  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);

  // function openCreatePostModal() {
  //   setShowCreatePostModal((prev) => !prev);
  // }

  // function openPostModal() {
  //   setShowPostModal((prev) => !prev);
  // }

  // function openAuthModal() {
  //   setShowAuthModal((prev) => !prev);
  // }

  return (
    <ModalContext.Provider
      value={{
        showCreatePostModal,
        setShowCreatePostModal,
        // openCreatePostModal,

        showPostModal,
        setShowPostModal,
        // openPostModal,

        showAuthModal,
        setShowAuthModal
        // openAuthModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
