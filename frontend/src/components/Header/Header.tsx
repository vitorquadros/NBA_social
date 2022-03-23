import styled from 'styled-components';
import AuthMenu from './AuthMenu';
import Search from './Search';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Container>
      <Content>
        <HeaderLink to="/">Home</HeaderLink>
        <Search />
        {/* <AuthMenu /> */}
        <UserMenu />
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
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 3rem;

  justify-content: space-between;
`;

const HeaderLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
