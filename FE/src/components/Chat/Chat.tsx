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
  ReceivedMessage,
  SentMessage,
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
import { chatData } from '../../state/reducers/chatsReducer/chatsReducer'; // TODO move type from reducer

const Chat: React.FC = () => {
  const { logoutUser, getAllChats } = useActions();
  const { data: advancedLinksData } = useTypedSelector((state) => state.advancedLinks);
  const { data: chatsData } = useTypedSelector((state) => state.chats);
  const { userData } = useTypedSelector((state) => state.user);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [createMessageUsername, setCreateMessageUsername] = useState<string>('');
  const [newMessage, setNewMessage] = useState<string>('');
  const [activeChat, setActiveChat] = useState<chatData | null>(null);

  // websockets
  const [clientConnection, setClientConnection] = useState<Stomp.Client | null>(null);
  const [messagesChannels, setMessagesChannels] = useState<Stomp.Subscription | null>(null);
  const [chatsChannels, setChatsChannels] = useState<Stomp.Subscription | null>(null);

  useEffect(() => {
    createConnection();

    const intervalID = setInterval(async () => {
      if (chatsData.length !== 0 && advancedLinksData) {
        getAllChats(advancedLinksData.GET_ALL_CHATS);
        const latestConversation = getLatestConverstation();
        setActiveChatMessagges(latestConversation._links.GET_CHAT.href, latestConversation);
      }
    }, 2000);

    return () => clearInterval(intervalID);
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
    if (chatsData.length !== 0) {
      const latestConversation = getLatestConverstation();
      setActiveChatMessagges(latestConversation._links.GET_CHAT.href, latestConversation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatsData]);

  const getLatestConverstation = (): chatData => {
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
    return mostRecentObject;
  };

  const setActiveChatMessagges = async (url: string, latestConversation: chatData) => {
    const response = await fetch(url);
    const data: chatData = await response.json();
    const sortedMessages = data.messages.sort((a, b) => {
      return Number(new Date(b.messageDate)) - Number(new Date(a.messageDate));
    });
    latestConversation.messages = sortedMessages;
    setActiveChat(latestConversation);
  };

  const changeChat = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const response = await fetch(`${advancedLinksData?.GET_ALL_CHATS}/${(e.target as HTMLInputElement).id}`);
    const data: chatData = await response.json();
    setActiveChatMessagges(data._links.GET_CHAT.href, data);
  };

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
    // clearInterval(intervalID);
  };

  const createChat = async () => {
    // createMessageUsername
    if (!advancedLinksData) {
      return;
    }
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ users: [{ username: createMessageUsername }] }),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(advancedLinksData.WRITE_TO_CHAT, requestOptions);
    if (!response.ok) {
      toast.error('Wystąpił błąd. Spróbuj ponownie później (Code: WRITE_TO_CHAT status)', { toastId: 'toast-write-to-chat-error' });
    } else {
      toast.success('Storzyłeś nowy chat!', { toastId: 'toast-write-to-chat-success' });
      setShowModal(false);
    }
  };

  const sendMessage = async () => {
    if (!activeChat) {
      return;
    }
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ text: newMessage }),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(activeChat._links.SEND_MESSAGE.href, requestOptions);
    if (!response.ok) {
      toast.error('Wystąpił błąd. Spróbuj ponownie później (Code: SEND_MESSAGE status)', { toastId: 'toast-send-message-error' });
    } else {
      toast.success('Wysłano wiadomość!', { toastId: 'toast-send-message-success' });
    }
    getAllChats(advancedLinksData?.GET_ALL_CHATS);
    setNewMessage('');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

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
          <PrimaryButton onClick={() => createChat()}>Wyślij</PrimaryButton>
        </>
      </Modal>
      <ChatHeader>
        <span>CZAT</span>
        <IconStyleWrapper onClick={() => onLogoutIconClick()}>
          <LogOut size="32" />
        </IconStyleWrapper>
      </ChatHeader>
      <LeftPanelWrapper isChatActive={Boolean(activeChat)}>
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
              <ListElementWrapper
                id={`${chat.id}`}
                onClick={(e) => {
                  changeChat(e);
                }}
              >
                <ListElementPhoto>{Array.from(chat?.title || 'Rozmówca')[0]}</ListElementPhoto>
                <ListElementContainer>
                  <ListElementUpperRow>
                    <ListElementUsername>{chat?.title || 'Rozmówca'}</ListElementUsername>
                    <span>{`${Math.floor(Math.abs(new Date(chat.lastMessageDate).getTime() - new Date().getTime()) / 36e5)} godzin temu`}</span>
                  </ListElementUpperRow>
                  <span>{chat.messages[0]?.text || 'Zacznij pisać już teraz!'}</span>
                </ListElementContainer>
              </ListElementWrapper>
            );
          })
        ) : (
          <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Obecnie nie należysz do żadnego chatu.</h3>
        )}
      </LeftPanelWrapper>
      <RightPanelWrapper isChatActive={Boolean(activeChat)}>
        <RightPanelHeader>
          <RightPanelHeaderContent>
            <ListElementPhoto>
              {activeChat && activeChat.users
                ? Array.from(
                    activeChat.users.find((element) => {
                      return element.username !== userData.username;
                    })?.username as string
                  )[0]
                : 'E'}
            </ListElementPhoto>
            <ListElementContainer>
              <ListElementUpperRow>
                <ListElementUsername>
                  {activeChat && activeChat.users
                    ? (activeChat.users.find((element) => {
                        return element.username !== userData.username;
                      })?.username as string)
                    : 'Example user'}
                </ListElementUsername>
              </ListElementUpperRow>
              <span>
                {activeChat
                  ? `${Math.floor(Math.abs(new Date(activeChat.lastMessageDate).getTime() - new Date().getTime()) / 36e5)} godzin temu`
                  : ''}
              </span>
            </ListElementContainer>
          </RightPanelHeaderContent>
        </RightPanelHeader>
        <RightPanelConversation>
          {console.log(`JSX activeChat ${activeChat}, activeChat.messages: ${activeChat?.messages}`)}
          {(activeChat &&
            activeChat.messages &&
            (activeChat.messages?.slice(0, 15).map((message) => {
              return message.author === userData.username ? (
                <SentMessage>{message.text}</SentMessage>
              ) : (
                <ReceivedMessage>{message.text}</ReceivedMessage>
              );
            }) as any)) ||
            ''}
        </RightPanelConversation>
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
