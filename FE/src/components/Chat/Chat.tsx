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
      <ChatHeader>CZAT - Co Za Ambitny Temat</ChatHeader>
      <LeftPanel>
        <SearchBarWrapper>
          <InactiveIconStyleWrapper>
            <MagnifyingGlass size="24" />
          </InactiveIconStyleWrapper>
          <span>Szukaj</span>
        </SearchBarWrapper>
        <ListElementWrapper>
          <ListPhotoWrapper>N</ListPhotoWrapper>
          <ListContainerUpperRow></ListContainerUpperRow>
          <ListContainerWrapper>
            <ListContainerUpperRow>
              <ListContainerUsername>Nickname123</ListContainerUsername>
              <ListContainerLastMsgTime>1h ago</ListContainerLastMsgTime>
            </ListContainerUpperRow>
            <ListContainerMessage>Lorem ipsum dolor sit amet</ListContainerMessage>
          </ListContainerWrapper>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListPhotoWrapper>N</ListPhotoWrapper>
          <ListContainerUpperRow></ListContainerUpperRow>
          <ListContainerWrapper>
            <ListContainerUpperRow>
              <ListContainerUsername>Nickname123</ListContainerUsername>
              <ListContainerLastMsgTime>1h ago</ListContainerLastMsgTime>
            </ListContainerUpperRow>
            <ListContainerMessage>Lorem ipsum dolor sit amet</ListContainerMessage>
          </ListContainerWrapper>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListPhotoWrapper>N</ListPhotoWrapper>
          <ListContainerUpperRow></ListContainerUpperRow>
          <ListContainerWrapper>
            <ListContainerUpperRow>
              <ListContainerUsername>Nickname123</ListContainerUsername>
              <ListContainerLastMsgTime>1h ago</ListContainerLastMsgTime>
            </ListContainerUpperRow>
            <ListContainerMessage>Lorem ipsum dolor sit amet</ListContainerMessage>
          </ListContainerWrapper>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListPhotoWrapper>N</ListPhotoWrapper>
          <ListContainerUpperRow></ListContainerUpperRow>
          <ListContainerWrapper>
            <ListContainerUpperRow>
              <ListContainerUsername>Nickname123</ListContainerUsername>
              <ListContainerLastMsgTime>1h ago</ListContainerLastMsgTime>
            </ListContainerUpperRow>
            <ListContainerMessage>Lorem ipsum dolor sit amet</ListContainerMessage>
          </ListContainerWrapper>
        </ListElementWrapper>
        <ListElementWrapper>
          <ListPhotoWrapper>N</ListPhotoWrapper>
          <ListContainerUpperRow></ListContainerUpperRow>
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
