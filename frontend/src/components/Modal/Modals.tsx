import useModal from '../../contexts/ModalContext/useModal';
import AuthModal from '../Auth/AuthModal';
import CreatePostModal from '../Post/CreatePost/CreatePostModal';

export default function Modals() {
  const { showCreatePostModal, showAuthModal } = useModal();

  return (
    <div>
      {showCreatePostModal && <CreatePostModal />}
      {showAuthModal && <AuthModal />}
    </div>
  );
}
