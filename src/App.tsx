import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store/configureStore';
import { theme } from './styles/theme';
import { Quiz } from './components/quiz';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Quiz />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
