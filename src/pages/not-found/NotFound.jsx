import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { routingCommands } from '../../commands/RoutingCommands';

function NotFound() {
  SpeechRecognition.startListening({ language: 'pt-pt', continuous: true });

  const commands = [];
  commands.push(...routingCommands);

  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div>
      <h1 className='NotFound'>
        404
        <p>Página não encontrada</p>
      </h1>
      <br />
      <p id='transcript'>Transcript: {transcript}</p>
    </div>
  );
}

export default NotFound;
