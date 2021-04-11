import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/mainComponent';
import '../node_modules/antd/dist/antd.css'
import {ConfigureStore} from './redux/configureStore';
import {Provider} from 'react-redux';

function App() {

  const store = ConfigureStore();

  return (
    <Provider store={store}>
         <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>
  
  );
}

export default App;
