import { Provider } from 'react-redux';
import { store } from '../state';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import Login from '../components/Login/Login';

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Login />
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
