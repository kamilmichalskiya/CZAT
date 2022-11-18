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
  UserInputWrapper,
  UserInput,
  DarkIconStyleWrapper,
  ModalHeader,
  PrimaryButton,
} from './Chat-styled';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { useState, useEffect } from 'react';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import { Send } from '@styled-icons/boxicons-solid/Send';
import { LogOut } from '@styled-icons/entypo/LogOut';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Modal } from '../Modal/Modal';
import Stomp from 'stompjs';
import { toast } from 'react-toastify';

const Chat: React.FC = () => {
  const { logoutUser } = useActions();
  const [clientConnection, setClientConnection] = useState<Stomp.Client | null>(null);
  const [messagesChannels, setMessagesChannels] = useState<Stomp.Subscription | null>(null);
  const [chatsChannels, setChatsChannels] = useState<Stomp.Subscription | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [createMessageUsername, setCreateMessageUsername] = useState<string>('');
  const [newMessage, setNewMessage] = useState<string>('');
  const { data: advancedLinksData } = useTypedSelector((state) => state.advancedLinks);
  const { data: chatsData } = useTypedSelector((state) => state.chats);

  useEffect(() => {
    createConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const subscribe = () => {
      if (!clientConnection || !advancedLinksData) {
        return;
      }
      const chatsSubscription = clientConnection.subscribe(advancedLinksData.WS_CHATS, (message: Stomp.Message) => {
        if (message) {
          console.log(message);
        }
      });
      const messagesSubscription = clientConnection.subscribe(advancedLinksData.WS_MESSAGES, (message: Stomp.Message) => {
        if (message) {
          console.log(message);
        }
      });

      setChatsChannels(chatsSubscription);
      setMessagesChannels(messagesSubscription);
    };

    if (clientConnection) {
      clientConnection.connect(
        {},
        function () {
          subscribe();
        },
        function () {
          createConnection();
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [advancedLinksData, clientConnection]);

  useEffect(() => {
    const getLatestConverstation = () => {
      const mostRecentDate = new Date(
        Math.max.apply(
          null,
          chatsData.map((e) => {
            return new Date(e.lastMessageDate) as any;
          })
        )
      );
      console.log(mostRecentDate);
      const mostRecentObject = chatsData.filter((e) => {
        const d = new Date(e.lastMessageDate);
        return d.getTime() === mostRecentDate.getTime();
      })[0];
      console.log(`Most recent chat: ${JSON.stringify(mostRecentObject)}`);
    };

    if (chatsData.length !== 0) {
      getLatestConverstation();
    }
  }, [chatsData]);

  const createConnection = () => {
    if (!advancedLinksData) {
      return;
    }
    const client = Stomp.client(advancedLinksData.WS_QUEUE);
    setClientConnection(client);
    console.log('DEBUG: Stomp connect');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unsubscribe = () => {
    // const rollSubscription = rollChannels.get(id);
    if (messagesChannels) {
      messagesChannels.unsubscribe();
      setMessagesChannels(null);
    }
    if (chatsChannels) {
      chatsChannels.unsubscribe();
      setChatsChannels(null);
    }
    clientConnection?.disconnect(() => {});
  };

  const onLogoutIconClick = (): void => {
    unsubscribe();
    logoutUser(advancedLinksData?.LOGOUT);
  };

  const createChat = async () => {
    // createMessageUsername
    if (!advancedLinksData) {
      return;
    }
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ users: [{ username: createMessageUsername }] }),
    };
    const response = await fetch(advancedLinksData.WRITE_TO_CHAT, requestOptions);
    if (!response.ok) {
      toast.error(`Wystąpił błąd. Spróbuj ponownie później (Code: WRITE_TO_CHAT Status)`, { toastId: 'toast-login-error-links' });
    }
  };

  const sendMessage = () => {
    console.log('SEND_MESSAGE');
  };

  return (
    <ChatWrapper>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <>
          <ModalHeader>Do kogo chcesz wysłać wiadomość?</ModalHeader>
          <UserInputWrapper>
            <DarkIconStyleWrapper>
              <PersonFill size="18" />
            </DarkIconStyleWrapper>
            <UserInput
              type="text"
              name="username"
              autoComplete="username"
              placeholder="Nazwa użytkownika"
              value={createMessageUsername}
              onChange={(e) => setCreateMessageUsername(e.target.value)}
            />
          </UserInputWrapper>
          <PrimaryButton onClick={() => createChat}>Wyślij</PrimaryButton>
        </>
      </Modal>
      <ChatHeader>
        <span>CZAT</span>
        <IconStyleWrapper onClick={() => onLogoutIconClick()}>
          <LogOut size="32" />
        </IconStyleWrapper>
      </ChatHeader>
      <LeftPanelWrapper>
        <SearchBarWrapper>
          <InactiveIconStyleWrapper>
            <MagnifyingGlass size="20" />
          </InactiveIconStyleWrapper>
          <input placeholder="Znajdź rozmówcę"></input>
          <SecondaryButton onClick={() => setShowModal(!showModal)}>Stwórz</SecondaryButton>
        </SearchBarWrapper>
        {chatsData.length ? (
          chatsData.map((chat) => {
            return (
              <ListElementWrapper>
                <ListElementPhoto>{Array.from(chat.users[1]?.username || 'Rozmówca')[0]}</ListElementPhoto>
                <ListElementContainer>
                  <ListElementUpperRow>
                    <ListElementUsername>{chat.users[1]?.username || 'Rozmówca'}</ListElementUsername>
                    <span>{chat.lastMessageDate}</span>
                  </ListElementUpperRow>
                  <span>{chat.messages[0] || 'Zacznij pisać już teraz!'}</span>
                </ListElementContainer>
              </ListElementWrapper>
            );
          })
        ) : (
          <h3>Obecnie nie należysz do żadnego chatu.</h3>
        )}
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
          <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Wpisz wiadomość"></input>
          <GreenIconStyleWrapper onClick={sendMessage}>
            <Send size="26" />
          </GreenIconStyleWrapper>
        </RightPanelBottomWrapper>
      </RightPanelWrapper>
    </ChatWrapper>
  );
};

export default Chat;
