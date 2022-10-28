import { useEffect } from 'react';
import {
  ChatWrapper,
  ChatHeader,
  LeftPanel,
  SearchBarWrapper,
  InactiveIconStyleWrapper,
  GreenIconStyleWrapper,
  ListElementWrapper,
  ListElementPhoto,
  ListElementContainer,
  ListElementUpperRow,
  ListElementUsername,
  RightPanel,
  RightPanelHeader,
  RightPanelContent,
  RightPanelBottomWrapper,
} from './Chat-styled';
import { toast } from 'react-toastify';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import { Send } from '@styled-icons/boxicons-solid/Send';

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
        <RightPanelBottomWrapper>
          <input placeholder="Wpisz wiadomość"></input>
          <GreenIconStyleWrapper>
            <Send size="36" />
          </GreenIconStyleWrapper>
        </RightPanelBottomWrapper>
      </RightPanel>
    </ChatWrapper>
  );
};

export default Chat;
