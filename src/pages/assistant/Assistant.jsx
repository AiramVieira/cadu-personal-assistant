import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { timeCommands } from '../../commands/TimeCommands';
import { basicCommands } from '../../commands/BasicCommands';
import { usefullCommands } from '../../commands/UsefullCommands';
import { routingCommands } from '../../commands/RoutingCommands';
import './Assistant.css';
import FunctionList from '../../components/function-list/FunctionList';

function Assistant() {
  SpeechRecognition.startListening({ language: 'pt-pt', continuous: true });

  const commands = [];
  commands.push(...timeCommands);
  commands.push(...basicCommands);
  commands.push(...routingCommands);
  commands.push(...usefullCommands);

  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div className='Assistant'>
      <h1>Oi eu sou Cadu!</h1>

      <p>Fala com o pai, que eu te respondo</p>

      <p id='transcript'>Transcript: {transcript}</p>

      <FunctionList commands={commands}/>
    </div>
  );
}

export default Assistant;
