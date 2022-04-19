import { useContext } from 'react';
import { CommentsContext } from '.';

export default function useComments() {
  const context = useContext(CommentsContext);

  return context;
}
