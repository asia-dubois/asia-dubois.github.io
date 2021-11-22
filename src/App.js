//import logo from './logo.svg';
import background from "./backgroundIMG.svg";
import './App.css';


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />*/}
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
