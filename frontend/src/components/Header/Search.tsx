import styled from 'styled-components';

export default function Search() {
  return (
    <Container>
      <div className="search-box">
        <label htmlFor="search">
          <span className="material-icons">search</span>
        </label>

        <input type="text" id="search" />
      </div>
    </Container>
  );
}

const Container = styled.form`
  width: 35rem;

  margin: 0 auto;

  div.search-box {
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: #efefef;

    width: 100%;

    span {
      margin: 0.5rem 0.6rem;
      color: #8e8e8e;
    }

    input {
      box-sizing: border-box;
      width: 100%;
      margin-right: 1rem;
      border: none;
      background-color: #efefef;

      &:focus {
        outline: none;
      }
    }
  }
`;
