import { SyntheticEvent, useContext, useRef } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';
import Comment from './Comment';

export default function PostModal() {
  const { setShowPostModal } = useContext(ModalContext);

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: SyntheticEvent) => {
    if (modalRef.current === e.target) {
      setShowPostModal(false);
    }
  };

  return (
    <Background onClick={closeModal} ref={modalRef}>
      <ModalWrapper>
        <ModalContent>
          <ImageContainer className="image">
            <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
          </ImageContainer>

          <DetailsContainer className="details">
            <div className="user-info">
              <img
                src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg"
                alt=""
              />
              <p className="name">Roberto Dias</p>
              <img
                className="team"
                src="https://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo.png"
                alt=""
                title="Jogador do Atlanta Hawks"
              />
              {/* <span>&#8226;</span>
              <p className="is-following">Você segue</p> */}
            </div>

            <div className="comments">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>

            <div className="reply-to-comment">
              <input type="text" placeholder="Adicione um comentário" />
              <span className="material-icons">send</span>
            </div>
          </DetailsContainer>
        </ModalContent>
      </ModalWrapper>
    </Background>
  );
}

const ModalContent = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 80vh;
`;

const ImageContainer = styled.div`
  max-width: 60%;

  img {
    min-width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 100%;
    max-height: 100%;
  }
`;

const DetailsContainer = styled.div`
  max-width: 40%;
  height: auto;
  max-height: 100%;

  div.user-info {
    padding: 1.6rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

    p.name {
      margin-left: 1rem;
    }

    /* span {
      margin: 0 1rem;
    } */

    /* p.is-following {
      font-size: 1.4rem;
      color: gray;
    } */

    img {
      width: 5rem;
      border-radius: 50%;
    }

    img.team {
      width: 5rem;
      margin-left: auto;
    }
  }

  div.comments {
    overflow-y: scroll;
    max-height: calc(
      100% - 83px - 5rem
    ); // modal header is always 83px and comment input is always 50px
  }

  div.reply-to-comment {
    width: 100%;
    height: 5rem;

    display: flex;
    align-items: center;

    border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

    span {
      padding: 0 2rem;
      cursor: pointer;
    }

    input {
      box-sizing: border-box;
      width: 100%;
      border: 0;

      font-size: 1.4rem;
      padding-left: 1rem;

      &:focus {
        outline: none;
      }
    }
  }
`;

const Background = styled.div`
  width: 100%;
  z-index: 100;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: auto;
  max-width: 70vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fafafa;
  color: #000;
  border-radius: 10px;

  animation: openModal 0.3s;

  @keyframes openModal {
    from {
      scale: 0%;
    }
    to {
      scale: 100%;
    }
  }
`;
