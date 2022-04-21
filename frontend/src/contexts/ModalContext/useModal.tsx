import { useContext } from 'react';
import { ModalContext } from '.';

export default function useModal() {
  const context = useContext(ModalContext);

  return context;
}
