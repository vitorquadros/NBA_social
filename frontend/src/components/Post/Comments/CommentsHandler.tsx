import useComments from '../../../contexts/CommentsContext/useComments';
import Comment from './Comment';
import Reply from './Reply';

export default function CommentsHandler({ comments }: any) {
  const { isReplying } = useComments();

  if (isReplying) return <Reply />;
  else {
    if (comments && comments.length > 0) {
      return comments.map((comment: any) => {
        if (comment.parentComment) return null;
        else
          return (
            <Comment
              key={comment.id}
              comment={comment}
              user={{
                displayName: comment.owner.displayName,
                avatar: comment.owner.avatar
              }}
            />
          );
      });
    } else {
      return (
        <p className="no-comments">Essa postagem ainda não tem comentários.</p>
      );
    }
  }
}
