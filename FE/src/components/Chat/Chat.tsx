import { useEffect } from 'react';
import {
  ChatWrapper,
  ChatHeader,
  LeftPanelWrapper,
  SearchBarWrapper,
  SecondaryButton,
  IconStyleWrapper,
  InactiveIconStyleWrapper,
  GreenIconStyleWrapper,
  ListElementWrapper,
  ListElementPhoto,
  ListElementContainer,
  ListElementUpperRow,
  ListElementUsername,
  RightPanelWrapper,
  RightPanelHeader,
  RightPanelHeaderContent,
  RightPanelConversation,
  RightPanelBottomWrapper,
} from './Chat-styled';
import { toast } from 'react-toastify';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import { Send } from '@styled-icons/boxicons-solid/Send';
import { LogOut } from '@styled-icons/entypo/LogOut';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Chat: React.FC = () => {
  const { logoutUser } = useActions();
  const { data: advancedLinksData } = useTypedSelector((state) => state.advancedLinks);

  useEffect(() => {
    toast.success('Zalogowano pomyślnie! Witaj w Czat!', { toastId: 'toast-login-success' });
  }, []);

  return (
    <ChatWrapper>
      <ChatHeader>
        <span>CZAT</span>
        <IconStyleWrapper onClick={() => logoutUser(advancedLinksData?.LOGOUT)}>
          <LogOut size="32" />
        </IconStyleWrapper>
      </ChatHeader>

      <LeftPanelWrapper>
        <SearchBarWrapper>
          <InactiveIconStyleWrapper>
            <MagnifyingGlass size="20" />
          </InactiveIconStyleWrapper>
          <input placeholder="Znajdź rozmówcę"></input>
          <SecondaryButton>Szukaj</SecondaryButton>
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
      </LeftPanelWrapper>

      <RightPanelWrapper>
        <RightPanelHeader>
          <RightPanelHeaderContent>
            <ListElementPhoto>{Array.from('Nickname123')[0]}</ListElementPhoto>
            <ListElementContainer>
              <ListElementUpperRow>
                <ListElementUsername>Nickname123</ListElementUsername>
              </ListElementUpperRow>
              <span>1h ago</span>
            </ListElementContainer>
          </RightPanelHeaderContent>
        </RightPanelHeader>
        <RightPanelConversation></RightPanelConversation>
        <RightPanelBottomWrapper>
          <input placeholder="Wpisz wiadomość"></input>
          <GreenIconStyleWrapper>
            <Send size="26" />
          </GreenIconStyleWrapper>
        </RightPanelBottomWrapper>
      </RightPanelWrapper>
    </ChatWrapper>
  );
};

export default Chat;
