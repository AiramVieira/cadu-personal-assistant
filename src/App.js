import './App.css';
import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpeechRecognition from 'react-speech-recognition';

function App() {
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    // Browser not supported & return some useful info.
    alert('Este navegador não tem suporte para usar os comandos de voz');
  }
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
