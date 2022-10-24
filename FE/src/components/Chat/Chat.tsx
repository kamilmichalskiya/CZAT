import { useEffect } from 'react';
import { ChatWrapper, ChatHeader } from './Chat-styled';
import { toast } from 'react-toastify';

const Chat: React.FC = () => {
  useEffect(() => {
    toast.success('Zalogowano pomyślnie! Witaj w Czat!', { toastId: 'toast-login-success' });
  }, []);

  return (
    <ChatWrapper>
      <ChatHeader>Czat</ChatHeader>
    </ChatWrapper>
  );
};

export default Chat;
