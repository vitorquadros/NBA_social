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
      min-width: 5rem;
      margin-right: 1rem;
      border: none;
      background-color: #efefef;

      &:focus {
        outline: none;
      }
    }
  }

  @media screen and (max-width: 400px) {
    margin: 0;
    margin-right: auto;

    div.search-box {
      width: 4rem;
      height: 3.6rem;

      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: #e56503;
      transition: 0.3s;

      &:hover {
        filter: brightness(80%);
      }

      label {
        cursor: pointer;
        width: auto;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
      }

      span {
        color: black;
        width: 2rem;
        height: 2rem;
        margin: 0;
        padding: 0;
      }

      input {
        display: none;
      }
    }
  }
  }

  @media screen and (max-width: 800px) {
  
`;
