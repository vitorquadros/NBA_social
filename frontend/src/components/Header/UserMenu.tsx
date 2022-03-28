import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function UserMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <div className="menu" onClick={() => setIsActive(!isActive)}>
        <img
          src="https://jumperbrasil.lance.com.br/wp-content/uploads/2021/01/Bam-Adebayo-1.jpg"
          alt=""
        />
        {isActive ? (
          <span className="material-icons">expand_less</span>
        ) : (
          <span className="material-icons">expand_more</span>
        )}
      </div>
      <div
        className="menu-options"
        style={{
          visibility: isActive ? 'visible' : 'hidden',
          opacity: isActive ? '1' : '0'
        }}
      >
        <Link to={'/profile'} className="options-button">
          <span className="material-icons">person</span>
          <p>Perfil</p>
        </Link>

        <Link to="/profile" className="options-button">
          <span className="material-icons">logout</span>
          <p>Sair</p>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  div.menu {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      min-width: 4rem;
      max-width: 4rem;
      min-height: 4rem;
      max-height: 4rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  div.menu-options {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 0;
    margin-top: 1rem;
    background-color: white;
    min-width: 15rem;
    max-width: 20rem;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-left: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

    transition: 0.2s;

    .options-button {
      display: flex;
      padding: 0.5rem 0;
      align-items: center;
      cursor: pointer;
      transition: background 0.3s;

      color: black;
      text-decoration: none;

      &:hover {
        background-color: #e6e6e6;
      }

      p {
        margin: 0 auto;
      }

      span {
        margin-left: 0.5rem;
      }
    }

    .options-button:last-child {
      border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    }
  }

  @media screen and (max-width: 800px) {
    margin-right: 1rem;
  }
`;
