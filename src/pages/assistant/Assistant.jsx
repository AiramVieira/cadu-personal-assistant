import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { timeCommands } from '../../commands/TimeCommands';
import { transcriptCommands } from '../../commands/TranscriptCommands';
import { browserCommands } from '../../commands/BrowserCommands';
import { routingCommands } from '../../commands/RoutingCommands';
import './Assistant.css';
import FunctionList from '../../components/function-list/FunctionList';

function Assistant() {
  SpeechRecognition.startListening({ language: 'pt-pt', continuous: true });

  const commands = [];
  commands.push(...timeCommands);
  commands.push(...transcriptCommands);
  commands.push(...routingCommands);
  commands.push(...browserCommands);

  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div className='Assistant' id='assistant'>
      <h1>Oi eu sou Cadu!</h1>

      <p>Fala com o pai, que eu te respondo</p>

      <p>Transcript: {transcript}</p>

      <FunctionList commands={commands} />
    </div>
  );
}

export default Assistant;
