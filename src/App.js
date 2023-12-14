import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import MainDash from './component/MainDash/MainDash';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <MainDash />
        <div></div>
      </div>
    </div>
  );
}

export default App;
