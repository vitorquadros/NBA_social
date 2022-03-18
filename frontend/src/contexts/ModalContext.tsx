import { createContext, ReactNode, useState } from 'react';

const initialValue = {
  showModal: false,
  setShowModal: () => {},
  openModal: () => {},
  image: '',
  setImage: () => {}
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
};

export const ModalContext = createContext<ModalContextTypes>(initialValue);

export const ModalContextProvider = ({ children }: ModalContextProps) => {
  const [showModal, setShowModal] = useState<boolean>(initialValue.showModal);
  const [image, setImage] = useState<string | FileList>(initialValue.image);

  function openModal() {
    setShowModal((prev) => !prev);
  }

  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, openModal, image, setImage }}
    >
      {children}
    </ModalContext.Provider>
  );
};
