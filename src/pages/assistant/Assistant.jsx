import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import allCommands from '../../commands/AllCommands';
import './Assistant.css';
import FunctionList from '../../components/function-list/FunctionList';

function Assistant() {
  SpeechRecognition.startListening({ language: 'pt-pt', continuous: true });

  const commands = [...allCommands];

  const { transcript } = useSpeechRecognition({ commands });

  function teste() {
    const script = document.createElement("script");

    console.log(script);

    script.src = "../discord-bot/CaduBot.js";
    script.async = true;

    document.body.appendChild(script);
  }

  return (
    <div className='Assistant' id='assistant'>
      <h1>Oi eu sou Cadu!</h1>

      <p>Fala com o pai, que eu te respondo</p>

      <p>Transcript: {transcript}</p>

      <FunctionList commands={commands} />

      <button onClick={_ => teste()}>teste</button>
    </div>
  );
}

export default Assistant;
