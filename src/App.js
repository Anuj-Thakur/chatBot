import './App.css';
import sendbtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, iusto. Similique error saepe corrupti ducimus iste mollitia blanditiis voluptatibus assumenda.</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eaque dicta veritatis natus mollitia, eius iusto dolorem similique vero, aliquid rerum aut assumenda quibusdam saepe facere molestias repudiandae sapiente vitae harum autem ullam repellat! Dignissimos esse sed cum voluptate tempore repellat quibusdam fugit voluptas. Praesentium eius reiciendis a, quod cupiditate amet eligendi consequuntur dolor aliquid necessitatibus doloremque qui! Numquam officiis possimus maxime iusto nesciunt architecto soluta aliquid commodi natus eligendi ipsum debitis, dignissimos voluptatum a reiciendis praesentium quas, corrupti, optio tempora voluptates cupiditate quisquam nam quibusdam? Tenetur placeat eligendi reprehenderit suscipit totam culpa aspernatur, voluptatum quisquam dignissimos, voluptatem laborum ducimus.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' /><button className="send"><img src={sendbtn} alt="Send" /></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
