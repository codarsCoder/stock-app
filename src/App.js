import { BrowserRouter } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </Provider>
      <ToastContainer />
    </>
  
  );
}

export default App;
