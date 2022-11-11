import Login from '../components/Login/Login';
import Chat from '../components/Chat/Chat';
import { useTypedSelector } from '../hooks/useTypedSelector';

const App: React.FC = () => {
  const { loggedIn } = useTypedSelector((state) => state.user);

  return <>{loggedIn ? <Chat /> : <Login />}</>;
};

export default App;
