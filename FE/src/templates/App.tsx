import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import Login from '../components/Login/Login';
import Chat from '../components/Chat/Chat';
import { toast } from 'react-toastify';

const App: React.FC = () => {
  const { getLinks, getAdvancedLinks, getAllChats } = useActions();
  const { userData } = useTypedSelector((state) => state.user);
  const { data: linksData } = useTypedSelector((state) => state.links);
  const { data: advancedLinksData, error: advancedLinksError } = useTypedSelector((state) => state.advancedLinks);
  const { error: chatsError } = useTypedSelector((state) => state.chats);

  useEffect(() => {
    getLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!userData.isLoggedIn && !userData.isRegistered) {
      return;
    }
    if (advancedLinksData && Object.keys(advancedLinksData).length === 0) {
      getAdvancedLinks(linksData?.ADVANCED_LINKS);
    }
    if (advancedLinksData && advancedLinksData.hasOwnProperty('GET_ALL_CHATS')) {
      getAllChats(advancedLinksData.GET_ALL_CHATS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.isLoggedIn, advancedLinksData?.GET_ALL_CHATS]);

  useEffect(() => {
    if (advancedLinksError) {
      toast.error(`Wystąpił błąd. Spróbuj ponownie później (Code: ${advancedLinksError}`, { toastId: 'toast-login-error-links' });
      return;
    } else if (chatsError) {
      toast.error(`Wystąpił błąd. Spróbuj ponownie później (Code: ${chatsError}`, { toastId: 'toast-login-error-chats' });
      return;
    }
  }, [advancedLinksError, chatsError]);

  const isUserAuthorized = () => {
    return userData.isLoggedIn && !advancedLinksError && linksData && Object.keys(linksData).length !== 0 && !chatsError;
  };

  return <>{isUserAuthorized() ? <Chat /> : <Login />}</>;
  // && advancedLinksData && Object.keys(advancedLinksData).length !== 0
};

export default App;
