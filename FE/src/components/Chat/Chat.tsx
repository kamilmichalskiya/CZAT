import { useEffect } from 'react';
import {
  ChatWrapper,
  ChatHeader,
  LeftPanel,
  SearchBarWrapper,
  InactiveIconStyleWrapper,
  ListElementWrapper,
  ListElementPhoto,
  ListElementContainer,
  ListElementUpperRow,
  ListElementUsername,
  RightPanel,
  RightPanelHeader,
  RightPanelContent,
} from './Chat-styled';
import { toast } from 'react-toastify';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';

const Chat: React.FC = () => {
  useEffect(() => {
    toast.success('Zalogowano pomyślnie! Witaj w Czat!', { toastId: 'toast-login-success' });
  }, []);

  return (
    <ChatWrapper>
      <ChatHeader>CZAT</ChatHeader>
      <LeftPanel>
        <SearchBarWrapper>
          <InactiveIconStyleWrapper>
            <MagnifyingGlass size="20" />
          </InactiveIconStyleWrapper>
          <input placeholder="Szukaj"></input>
        </SearchBarWrapper>
        <ListElementWrapper>
          <ListElementPhoto>{Array.from('Nickname123')[0]}</ListElementPhoto>
          <ListElementContainer>
            <ListElementUpperRow>
              <ListElementUsername>Nickname123</ListElementUsername>
              <span>1h ago</span>
            </ListElementUpperRow>
            <span>Lorem ipsum dolor sit amet</span>
          </ListElementContainer>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListElementPhoto>{Array.from('Nickname123')[0]}</ListElementPhoto>
          <ListElementContainer>
            <ListElementUpperRow>
              <ListElementUsername>Nickname123</ListElementUsername>
              <span>1h ago</span>
            </ListElementUpperRow>
            <span>Lorem ipsum dolor sit amet</span>
          </ListElementContainer>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListElementPhoto>{Array.from('Anothernick123')[0]}</ListElementPhoto>
          <ListElementContainer>
            <ListElementUpperRow>
              <ListElementUsername>Anothernick123</ListElementUsername>
              <span>1h ago</span>
            </ListElementUpperRow>
            <span>Lorem ipsum dolor sit amet</span>
          </ListElementContainer>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListElementPhoto>{Array.from('Nickname123')[0]}</ListElementPhoto>
          <ListElementContainer>
            <ListElementUpperRow>
              <ListElementUsername>Nickname123</ListElementUsername>
              <span>1h ago</span>
            </ListElementUpperRow>
            <span>Lorem ipsum dolor sit amet</span>
          </ListElementContainer>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListElementPhoto>{Array.from('Nickname123')[0]}</ListElementPhoto>
          <ListElementContainer>
            <ListElementUpperRow>
              <ListElementUsername>Nickname123</ListElementUsername>
              <span>1h ago</span>
            </ListElementUpperRow>
            <span>Lorem ipsum dolor sit amet</span>
          </ListElementContainer>
        </ListElementWrapper>
      </LeftPanel>
      <RightPanel>
        <RightPanelHeader>
          <ListElementWrapper>
            <ListElementPhoto>{Array.from('Nickname123')[0]}</ListElementPhoto>
            <ListElementContainer>
              <ListElementUpperRow>
                <ListElementUsername>Nickname123</ListElementUsername>
              </ListElementUpperRow>
              <span>1h ago</span>
            </ListElementContainer>
          </ListElementWrapper>
        </RightPanelHeader>
        <RightPanelContent></RightPanelContent>
      </RightPanel>
    </ChatWrapper>
  );
};

export default Chat;
