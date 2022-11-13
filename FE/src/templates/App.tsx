import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import Login from '../components/Login/Login';
import Chat from '../components/Chat/Chat';

const App: React.FC = () => {
  const { getLinks, getAdvancedLinks } = useActions();
  const { userData } = useTypedSelector((state) => state.user);
  const { data: linksData } = useTypedSelector((state) => state.links);

  useEffect(() => {
    getLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userData.loggedIn) {
      getAdvancedLinks(linksData?.ADVANCED_LINKS);
    }
  }, [getAdvancedLinks, linksData?.ADVANCED_LINKS, userData.loggedIn]);

  return <>{userData.loggedIn ? <Chat /> : <Login />}</>;
};

export default App;
