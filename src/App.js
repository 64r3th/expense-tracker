import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Overview from './components/Overview';
import History from './components/History';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <Overview />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
