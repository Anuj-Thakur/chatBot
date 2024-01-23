import './App.css';
import searchbtn from './assets/search-icon.svg';

function App() {
  return (
    <div className="App">
      <div className="sidepanel">

      </div>

      <div className="main">
        <div className="search-bar">
          <div className="inp">
            <input type="text" placeholder='Enter your query' /><button className="send"><img src={searchbtn} alt="Send" /></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
