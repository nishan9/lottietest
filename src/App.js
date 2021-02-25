import logo from './logo.svg';
import './App.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


function App() {
  return (
    <div className="App">
      <Player
  autoplay
  loop
  src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
  style={{ height: '300px', width: '300px' }}
>
  <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
    </div>
  );
}

export default App;
