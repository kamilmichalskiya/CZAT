import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import Login from '../components/Login/Login';
import Chat from '../components/Chat/Chat';
import { toast } from 'react-toastify';

const App: React.FC = () => {
  const { getLinks, getAdvancedLinks } = useActions();
  const { userData } = useTypedSelector((state) => state.user);
  const { data: linksData } = useTypedSelector((state) => state.links);
  const { error: advancedLinksError } = useTypedSelector((state) => state.advancedLinks);

  useEffect(() => {
    getLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (userData.isLoggedIn) {
  //     getAdvancedLinks(linksData?.ADVANCED_LINKS);
  //   }
  // }, [getAdvancedLinks, linksData?.ADVANCED_LINKS, userData.isLoggedIn]);

  useEffect(() => {
    if (advancedLinksError) {
      toast.error(`Wystąpił błąd. Spróbuj ponownie później! (CODE: ${advancedLinksError})`, { toastId: 'toast-id-error-advanced-links' });
    }
  }, [advancedLinksError]);

  return <>{userData.isLoggedIn && !advancedLinksError ? <Chat /> : <Login />}</>;
};

export default App;
