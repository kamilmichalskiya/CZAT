import { useEffect } from 'react';
import {
  ChatWrapper,
  ChatHeader,
  LeftPanel,
  SearchBarWrapper,
  InactiveIconStyleWrapper,
  ListElementWrapper,
  ListPhotoWrapper,
  ListContainerWrapper,
  ListContainerUpperRow,
  ListContainerUsername,
  ListContainerLastMsgTime,
  ListContainerMessage,
  RightPanel,
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
            <MagnifyingGlass size="24" />
          </InactiveIconStyleWrapper>
          <input placeholder="Szukaj"></input>
        </SearchBarWrapper>
        <ListElementWrapper>
          <ListPhotoWrapper>{Array.from('Nickname123')[0]}</ListPhotoWrapper>
          <ListContainerWrapper>
            <ListContainerUpperRow>
              <ListContainerUsername>Nickname123</ListContainerUsername>
              <ListContainerLastMsgTime>1h ago</ListContainerLastMsgTime>
            </ListContainerUpperRow>
            <ListContainerMessage>Lorem ipsum dolor sit amet</ListContainerMessage>
          </ListContainerWrapper>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListPhotoWrapper>{Array.from('Nickname123')[0]}</ListPhotoWrapper>
          <ListContainerWrapper>
            <ListContainerUpperRow>
              <ListContainerUsername>Nickname123</ListContainerUsername>
              <ListContainerLastMsgTime>1h ago</ListContainerLastMsgTime>
            </ListContainerUpperRow>
            <ListContainerMessage>Lorem ipsum dolor sit amet</ListContainerMessage>
          </ListContainerWrapper>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListPhotoWrapper>{Array.from('Anothernick123')[0]}</ListPhotoWrapper>
          <ListContainerWrapper>
            <ListContainerUpperRow>
              <ListContainerUsername>Anothernick123</ListContainerUsername>
              <ListContainerLastMsgTime>1h ago</ListContainerLastMsgTime>
            </ListContainerUpperRow>
            <ListContainerMessage>Lorem ipsum dolor sit amet</ListContainerMessage>
          </ListContainerWrapper>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListPhotoWrapper>{Array.from('Nickname123')[0]}</ListPhotoWrapper>
          <ListContainerWrapper>
            <ListContainerUpperRow>
              <ListContainerUsername>Nickname123</ListContainerUsername>
              <ListContainerLastMsgTime>1h ago</ListContainerLastMsgTime>
            </ListContainerUpperRow>
            <ListContainerMessage>Lorem ipsum dolor sit amet</ListContainerMessage>
          </ListContainerWrapper>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListPhotoWrapper>{Array.from('Nickname123')[0]}</ListPhotoWrapper>
          <ListContainerWrapper>
            <ListContainerUpperRow>
              <ListContainerUsername>Nickname123</ListContainerUsername>
              <ListContainerLastMsgTime>1h ago</ListContainerLastMsgTime>
            </ListContainerUpperRow>
            <ListContainerMessage>Lorem ipsum dolor sit amet</ListContainerMessage>
          </ListContainerWrapper>
        </ListElementWrapper>
      </LeftPanel>
      <RightPanel>Right</RightPanel>
    </ChatWrapper>
  );
};

export default Chat;
