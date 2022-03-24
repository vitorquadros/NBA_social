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

  showAuthModal: false,
  setShowAuthModal: () => {},
  openAuthModal: () => {},
  isRegister: false,
  setIsRegister: () => {}
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

  showAuthModal: boolean;
  setShowAuthModal: (state: boolean) => void;
  openAuthModal: () => void;
  isRegister: boolean;
  setIsRegister: (state: boolean) => void;
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

  const [showAuthModal, setShowAuthModal] = useState<boolean>(
    initialValue.showAuthModal
  );
  const [isRegister, setIsRegister] = useState<boolean>(
    initialValue.isRegister
  );

  function openCreatePostModal() {
    setShowCreatePostModal((prev) => !prev);
  }

  function openPostModal() {
    setShowPostModal((prev) => !prev);
  }

  function openAuthModal() {
    setShowAuthModal((prev) => !prev);
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

        showAuthModal,
        setShowAuthModal,
        openAuthModal,
        isRegister,
        setIsRegister
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
