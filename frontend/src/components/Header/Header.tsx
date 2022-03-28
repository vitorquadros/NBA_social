import styled from 'styled-components';
import AuthMenu from './AuthMenu';
import Search from './Search';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';
import CreatePostMenu from './CreatePostMenu';

export default function Header() {
  return (
    <Container>
      <Content>
        <HeaderLink to="/">Home</HeaderLink>
        <Search />

        <AuthMenu />

        {/* <CreatePostMenu /> */}
        {/* <UserMenu /> */}
      </Content>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 6rem;
  /* max-height: ;  TODO */
  display: flex;
  justify-content: center;

  background-color: white;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

  @media screen and (max-width: 800px) {
  }
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 0 1rem;

  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 100%;
    gap: 1rem;
  }
`;

const HeaderLink = styled(Link)`
  color: black;
  text-decoration: none;

  @media screen and (max-width: 800px) {
    margin-left: 1rem;
  }
`;
