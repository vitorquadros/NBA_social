import { createContext, ReactNode, useState } from 'react';

const initialValue = {
  showModal: false,
  setShowModal: () => {},
  openModal: () => {},
  image: '',
  setImage: () => {},

  showPostModal: false,
  setShowPostModal: () => {},
  openPostModal: () => {}
};

type ModalContextProps = {
  children: ReactNode;
};

type ModalContextTypes = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  openModal: () => void;
  image: FileList | string;
  setImage: (imageFile: FileList) => void;

  showPostModal: boolean;
  setShowPostModal: (state: boolean) => void;
  openPostModal: () => void;
};

export const ModalContext = createContext<ModalContextTypes>(initialValue);

export const ModalContextProvider = ({ children }: ModalContextProps) => {
  const [showModal, setShowModal] = useState<boolean>(initialValue.showModal);
  const [image, setImage] = useState<string | FileList>(initialValue.image);

  const [showPostModal, setShowPostModal] = useState<boolean>(
    initialValue.showPostModal
  );

  function openModal() {
    setShowModal((prev) => !prev);
  }

  function openPostModal() {
    setShowPostModal((prev) => !prev);
  }

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        openModal,
        image,
        setImage,

        showPostModal,
        setShowPostModal,
        openPostModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
