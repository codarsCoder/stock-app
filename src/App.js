import { BrowserRouter } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
