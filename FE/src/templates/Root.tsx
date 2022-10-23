import { Provider } from 'react-redux';
import { store } from '../state';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import Login from '../components/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Login />
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
