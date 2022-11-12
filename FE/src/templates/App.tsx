import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import Login from '../components/Login/Login';
import Chat from '../components/Chat/Chat';

const App: React.FC = () => {
  const { getLinks } = useActions();
  const { userData } = useTypedSelector((state) => state.user);

  useEffect(() => {
    getLinks();
  }, [getLinks]);

  return <>{userData.loggedIn ? <Chat /> : <Login />}</>;
};

export default App;
