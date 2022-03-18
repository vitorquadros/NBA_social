import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import PostModal from '../components/Post/PostModal';

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function openModal() {
    setShowModal((prev) => !prev);
  }

  return (
    <Wrapper>
      <Header />
      <Content>
        <button onClick={openModal}>Modal</button>
        <PostModal showModal={showModal} setShowModal={setShowModal} />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 10rem); // FIX
  width: 100%;

  background-color: #fafafa;
`;

const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 10rem;

  border: 1px solid black; // DEBUG
`;
