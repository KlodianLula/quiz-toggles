import { ThemeProvider } from 'styled-components';
import { useAppDispatch } from './redux/store/configureStore';
import { theme } from './styles/theme';
import { Quiz } from './components/quiz';
import { useState, useCallback, useEffect } from 'react';
import { shuffleQuizAnswers } from './redux/quizSlice';
import GlobalStyle from './styles/globalStyle';

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(shuffleQuizAnswers());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  if (loading) return <h2>Initialising app...</h2> // style this

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Quiz />
    </ThemeProvider>
  );
}

export default App;
