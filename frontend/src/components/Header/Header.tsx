import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <Content>
        <p>Logo</p>
      </Content>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  width: 100%;
  min-height: 6rem;
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
`;
