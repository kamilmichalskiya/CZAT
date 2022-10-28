import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const ChatWrapper = styled.div`
  /* min-height: 100vh; */
  height: 900px;
  max-width: ${({ theme }) => theme.size.xl};
  display: grid;
  grid-template-columns: 0.35fr 0.65fr;
  grid-template-rows: 0.05fr 0.95fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 10px 10px 25px;
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
    padding: 10px 10px 25px;
    min-height: unset;
    border-radius: 20px;
    margin: 20px;
  }
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const InactiveIconStyleWrapper = styled(IconStyleWrapper)`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  &:hover {
    cursor: default;
  }
`;

export const GreenIconStyleWrapper = styled(IconStyleWrapper)`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ChatHeader = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;

export const LeftPanel = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 10px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  padding: 0 10px;
  margin: 5px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  input {
    flex-grow: 1;
    padding: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary};
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

export const ListElementWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: 4em;
  border-radius: 10px;
`;

export const ListElementPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  font-size: 2em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ListElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 15px;
  flex-grow: 1;
  height: 100%;
  padding: 4px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const ListElementUpperRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListElementUsername = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const RightPanel = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const RightPanelHeader = styled.div`
  display: flex;
  align-items: center;
  height: 5em;
  padding: 10px 10px 0;
`;

export const RightPanelContent = styled.div`
  flex-grow: 1;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const RightPanelBottomWrapper = styled.div`
  height: 4em;
  display: flex;
  align-items: center;
  padding: 0 20px;

  input {
    flex-grow: 1;
    padding: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grey};
    border: none;
    font-size: ${({ theme }) => theme.fontSize.m};
    &:focus {
      outline: none;
    }
  }
`;