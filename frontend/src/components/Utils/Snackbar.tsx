import { useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';

type SnackbarProps = {
  message: string;
  type: string;
};

const Snackbar = forwardRef(({ message, type }: SnackbarProps, ref) => {
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 1000 * 3);
    }
  }));

  return (
    <Container
      style={{
        backgroundColor: type == 'success' ? '#4BB543' : '#FC100D',
        visibility: showSnackbar ? 'visible' : 'hidden',
        animation: showSnackbar ? 'fadeIn 0.5s, fadeOut 0.5s 2.5s' : 'none'
      }}
    >
      {type == 'success' ? (
        <span className="material-icons">done</span>
      ) : (
        <span className="material-icons">close</span>
      )}
      <p>{message}</p>
    </Container>
  );
});

export default Snackbar;

const Container = styled.div`
  padding: 0 1rem;
  position: fixed;
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 35rem;
  height: 6rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 1000;

  span {
    flex: 15%;
  }

  p {
    flex: 85%;
    text-align: start;
  }

  @keyframes fadeIn {
    from {
      bottom: 0;
      opacity: 0;
    }

    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      bottom: 30px;
      opacity: 1;
    }

    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;
