import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const DarkIconStyleWrapper = styled(IconStyleWrapper)`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  &:hover {
    cursor: default;
  }
`;

export const DarkEyeStyleWrapper = styled(IconStyleWrapper)`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const GreenTextWrapper = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const CloseIconStyleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const LoginTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
`;

export const TextSpan = styled.span`
  letter-spacing: 0.08em;
  margin-bottom: 20px;
`;

export const UserInputWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  align-items: center;
  margin: 5px 0;
  height: 55px;
  width: 320px;
  padding: 10px 15px;
  margin-top: 20px;
`;

export const UserInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin-left: 20px;
  border: none;
  height: 100%;
  flex-grow: 1;
  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-size: ${({ theme }) => theme.fontSize.s};
    letter-spacing: 0.08em;
  }
  &:focus {
    outline: none;
  }
`;

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.l};
  width: 320px;
  height: 55px;
  border-radius: 100px;
  font-weight: 600;
  margin-top: 35px;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.08em;
  &:hover {
    opacity: 0.9;
  }
`;

export const DividerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  width: 320px;
`;

export const Line = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  width: 120px;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 320px;
`;

export const IconsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const GoogleIconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: #d0463b;
  }
`;

export const FacebookIconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: #32519b;
  }
`;

export const AppleIconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: black;
  }
`;
