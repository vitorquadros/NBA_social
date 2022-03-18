import { createContext, ReactNode, useState } from 'react';

const initialValue = {
  showModal: false,
  setShowModal: () => {},
  openModal: () => {}
};

type ModalContextProps = {
  children: ReactNode;
};

type ModalContextTypes = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  openModal: () => void;
};

export const ModalContext = createContext<ModalContextTypes>(initialValue);

export const ModalContextProvider = ({ children }: ModalContextProps) => {
  const [showModal, setShowModal] = useState<boolean>(initialValue.showModal);

  function openModal() {
    setShowModal((prev) => !prev);
  }

  return (
    <ModalContext.Provider value={{ showModal, setShowModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};
