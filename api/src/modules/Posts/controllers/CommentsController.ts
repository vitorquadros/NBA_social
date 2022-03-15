import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CommentsUsecase } from '../usecases/CommentsUsecase';

export class CommentsController {
  async store(req: Request, res: Response): Promise<Response> {
    const { postId } = req.params;
    const { userId } = req;
    const { text, parentCommentId } = req.body;

    const commentsUsecase = container.resolve(CommentsUsecase);

    try {
      const comment = await commentsUsecase.createComment({
        text,
        postId,
        userId,
        parentCommentId
      });

      return res.status(201).json({ status: 'ok', data: comment });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    const { postId } = req.params;

    const commentsUsecase = container.resolve(CommentsUsecase);

    try {
      const comments = await commentsUsecase.getAllCommentsFromPost(postId);

      return res
        .status(200)
        .json({ status: 'ok', commentsCount: comments.length, data: comments });
    } catch (error) {
      return res.status(400).json({ status: 'error', error: error.message });
    }
  }
}
