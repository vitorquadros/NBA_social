import { createContext, ReactNode, useState } from 'react';

const initialValue = {
  showCreatePostModal: false,
  setShowCreatePostModal: () => {},
  openCreatePostModal: () => {},
  image: '',
  setImage: () => {},

  showPostModal: false,
  setShowPostModal: () => {},
  openPostModal: () => {},

  showRegisterModal: false,
  setShowRegisterModal: () => {},
  openRegisterModal: () => {}
};

type ModalContextProps = {
  children: ReactNode;
};

type ModalContextTypes = {
  image: FileList | string;
  setImage: (imageFile: FileList) => void;

  showCreatePostModal: boolean;
  setShowCreatePostModal: (state: boolean) => void;
  openCreatePostModal: () => void;

  showPostModal: boolean;
  setShowPostModal: (state: boolean) => void;
  openPostModal: () => void;

  showRegisterModal: boolean;
  setShowRegisterModal: (state: boolean) => void;
  openRegisterModal: () => void;
};

export const ModalContext = createContext<ModalContextTypes>(initialValue);

export const ModalContextProvider = ({ children }: ModalContextProps) => {
  const [image, setImage] = useState<string | FileList>(initialValue.image);

  const [showCreatePostModal, setShowCreatePostModal] = useState<boolean>(
    initialValue.showCreatePostModal
  );

  const [showPostModal, setShowPostModal] = useState<boolean>(
    initialValue.showPostModal
  );

  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(
    initialValue.showRegisterModal
  );

  function openCreatePostModal() {
    setShowCreatePostModal((prev) => !prev);
  }

  function openPostModal() {
    setShowPostModal((prev) => !prev);
  }

  function openRegisterModal() {
    setShowRegisterModal((prev) => !prev);
  }

  return (
    <ModalContext.Provider
      value={{
        image,
        setImage,

        showCreatePostModal,
        setShowCreatePostModal,
        openCreatePostModal,

        showPostModal,
        setShowPostModal,
        openPostModal,

        showRegisterModal,
        setShowRegisterModal,
        openRegisterModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
