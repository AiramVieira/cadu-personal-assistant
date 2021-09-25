import SpeechRecognition from 'react-speech-recognition';

export const routingCommands = [
  {
    command: ['Navegar para *', 'Ir para *'],
    callback: (page) => {
      const p = page.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase();
      // stop actual listener
      SpeechRecognition.stopListening();
      window.location.pathname = `/${p}`;
    },
  },
];
