// import logo from './logo.svg';
import './App.css';
import Photo from './components/Image';
import imgsrc from "./components/Profile.png";
import Body from "./components/Body";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app">
      <Photo 
        img={imgsrc}
      />
      <Body />
    </div>
  );
}

export default App;
