import styled from 'styled-components';

export const ChatWrapper = styled.div`
  min-height: 100vh;
  max-width: ${({ theme }) => theme.size.xl};
  display: flex;
  flex-direction: column;
  padding: 35px 10px 25px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 6px 5px -5px ${({ theme }) => theme.colors.secondary};

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 35px 10px 25px;
    min-height: unset;
    border-radius: 20px;
    margin: 20px;
  }
`;

export const ChatHeader = styled.div`
  width: 100%;
  margin: 10px 0 10px 5px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
`;
