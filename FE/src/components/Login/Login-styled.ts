import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const LoginWrapper = styled.div`
  min-height: 100vh;
  max-width: ${({ theme }) => theme.size.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const LoginTitle = styled.span`
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  letter-spacing: 0.08em;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: 20px;
  }
`;

export const LoginDescription = styled.span`
  letter-spacing: 0.08em;
  margin-bottom: 20px;
`;

interface UserInputWrapperProps {
  hasError: boolean;
}

export const UserInputWrapper = styled.div<UserInputWrapperProps>`
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  align-items: center;
  margin: 5px 0;
  height: 55px;
  width: 100%;
  max-width: 320px;
  padding: 10px 15px;
  margin-top: 20px;
  border: 2px solid;
  border-color: ${({ hasError, theme }) => (hasError ? theme.colors.error : theme.colors.tertiary)};
`;

export const UserInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 20px;
  border: none;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.tertiary};
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
  height: 55px;
  width: 100%;
  max-width: 320px;
  margin-top: 35px;
  margin: 35px 0 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 100px;
  font-weight: 600;
  letter-spacing: 0.08em;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.9;
    transition: opacity 0.5s;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: 90px;
  }
`;

export const InfoSpan = styled.span`
  width: 100%;
  padding: 0 20px 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    text-align: left;
  }
`;

export const Footer = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SwitchViewAnchor = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  font-weight: bold;
  transition: color 0.5s;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.5s;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    text-align: left;
  }
`;

export const CopyrightSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  padding-top: 30px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    text-align: right;
    padding-top: 0px;
  }
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  margin: 0 0 5px;
  color: ${({ theme }) => theme.colors.error};
`;
