import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { basicCommands } from '../../commands/BasicCommands';
import { usefullCommands } from '../../commands/UsefullCommands';
import { routingCommands } from '../../commands/RoutingCommands';
import './Assistant.css'

function Assistant() {
  SpeechRecognition.startListening({ language: 'pt-pt', continuous: true });

  const commands = [];
  commands.push(...basicCommands);
  commands.push(...routingCommands);
  commands.push(...usefullCommands);

  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div className='Assistant'>
      <h1>Oi eu sou Cadu!</h1>

      <p>Fala com o pai, que eu te respondo</p>

      <p id='transcript'>Transcript: {transcript}</p>
    </div>
  );
}

export default Assistant;
