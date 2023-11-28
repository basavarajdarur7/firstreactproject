import logo from './logo.svg';
import './App.css';
import './mycss.css';
import FirstComponent from './components/firstcomponents.jsx';
import Scomponent from './components/scomponent.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <marquee>Welcome To RBASAVARAJ </marquee>
        <p style={ {color:'red'}}>
         Hi Hello Welcome to RBASAVARAJ
        </p>
        <p className='mystyle'>
         Hi Hello Welcome to RBASAVARAJ
        </p>
        <FirstComponent mypro={"mystyle"} />
        <Scomponent></Scomponent>
      
      </header>
    </div>
    
  );
}

export default App;
