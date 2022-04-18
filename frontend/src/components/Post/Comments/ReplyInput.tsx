import { useState } from 'react';
import styled from 'styled-components';
import useAuth from '../../../contexts/AuthContext/useAuth';
import useApi from '../../../hooks/useApi';

export default function ReplyInput({
  setComments,
  postId,
  replys,
  setReplys
}: any) {
  const { displayName, token } = useAuth();
  const { callForm } = useApi();
  const [commentText, setCommentText] = useState<string>('');

  async function onSubmit(e: any) {
    e.preventDefault();
    try {
      const comment = await callForm({
        url: `/posts/${postId}/comments`,
        method: 'post',
        data: {
          text: commentText,
          parentCommentId:
            replys && replys.length > 0 ? replys[0].parentComment.id : null
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setComments((prev: any) => [...prev, comment.data]);

      if (replys && replys.length > 0) {
        setReplys((prev: any) => [...prev, comment.data]);
      }

      setCommentText('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        name="comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder={
          replys && replys.length > 0
            ? `Respondendo à ${replys[0].parentComment.owner.displayName}`
            : 'Adicionar um comentário'
        }
      />
      <button type="submit">
        <span className="material-icons">send</span>
      </button>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  margin-top: auto;

  border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

  button {
    border: 0;
    background: #fafafa;
    padding: 0;

    span {
      padding: 1rem 1rem;
      cursor: pointer;
    }
  }

  input {
    box-sizing: border-box;
    width: 100%;
    border: 0;
    background-color: #fafafa;

    font-size: 1.4rem;
    padding-left: 1rem;

    &:focus {
      outline: none;
    }
  }
`;
