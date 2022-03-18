import { useRef, useState } from 'react';
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
