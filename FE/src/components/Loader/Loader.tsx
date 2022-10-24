import { SyncLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  z-index: 5;
  opacity: 0.99;
`;

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <LoaderContainer>
          <SyncLoader size={50} color={'#1ED760'} loading={isLoading} />
        </LoaderContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default Loader;
