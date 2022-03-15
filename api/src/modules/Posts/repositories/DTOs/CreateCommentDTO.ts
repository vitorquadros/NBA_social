export interface CreateCommentDTO {
  id?: string;
  text: string;
  userId: string;
  postId: string;
  parentCommentId?: string;
}
