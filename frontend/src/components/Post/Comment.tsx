import styled from 'styled-components';

export default function Comment() {
  return (
    <Container>
      <div className="comment">
        <img
          src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg"
          alt=""
        />
        <div className="comment-details">
          <p className="comment-owner">Roberto Dias</p>
          <p className="comment-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsam.
          </p>

          <div className="comment-actions">
            <span>19h</span>
            <span className="reply">Responder</span>
          </div>
        </div>
      </div>
      <div className="comment-replys">
        <p>Ver respostas (6)</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem 1rem 2rem 1.2rem;
  display: flex;
  flex-direction: column;

  div.comment {
    display: flex;
  }

  div.comment-details {
    p.comment-owner {
      font-weight: 500;
    }

    p.comment-text {
      font-size: 1.4rem;
    }
  }

  div.comment-actions {
    display: flex;
    gap: 1rem;
    margin-top: 0.8rem;

    span {
      font-size: 1.2rem;
      color: gray;
    }

    span.reply {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  div.comment-replys {
    display: flex;
    margin: 0 auto;

    p {
      font-size: 1.4rem;
      margin: auto;
      color: gray;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1.2rem;
  }
`;
