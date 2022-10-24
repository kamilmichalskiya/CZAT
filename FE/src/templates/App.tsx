import Login from '../components/Login/Login';
import Chat from '../components/Chat/Chat';
import { useTypedSelector } from '../hooks/useTypedSelector';

const App: React.FC = () => {
  const { data } = useTypedSelector((state) => state.login);

  return <>{data.loggedIn ? <Chat /> : <Login />}</>;
};

export default App;
