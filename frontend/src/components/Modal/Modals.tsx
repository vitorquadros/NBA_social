import useModal from '../../contexts/ModalContext/useModal';
import CreatePostModal from '../Post/CreatePost/CreatePostModal';

export default function Modals() {
  const { showCreatePostModal } = useModal();

  return <div>{showCreatePostModal && <CreatePostModal />}</div>;
}
