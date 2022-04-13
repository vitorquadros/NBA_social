export interface IContext {
  showCreatePostModal: boolean;
  setShowCreatePostModal: (state: boolean) => void;
  // openCreatePostModal: () => void;

  showPostModal: boolean;
  setShowPostModal: (state: boolean) => void;
  // openPostModal: () => void;

  showAuthModal: boolean;
  setShowAuthModal: (state: boolean) => void;
  // openAuthModal: () => void;
}

export interface IModalProvider {
  children: JSX.Element;
}
