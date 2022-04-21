export interface IContext {
  showCreatePostModal: boolean;
  setShowCreatePostModal: (state: boolean) => void;

  showPostModal: string;
  setShowPostModal: (postId: string) => void;

  showAuthModal: boolean;
  setShowAuthModal: (state: boolean) => void;
}

export interface IModalProvider {
  children: JSX.Element;
}
