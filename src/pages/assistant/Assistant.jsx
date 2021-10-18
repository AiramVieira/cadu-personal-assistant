import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import allCommands from '../../commands/AllCommands';
import './Assistant.css';
import FunctionList from '../../components/function-list/FunctionList';
import ContentHeader from '../../components/content-header/ContentHeader';

function Assistant() {
  SpeechRecognition.startListening({ language: 'pt-pt', continuous: true });

  const commands = [...allCommands];
  useSpeechRecognition({ commands });

  return (
    <div className='Assistant' id='assistant'>
      <ContentHeader title='Oi eu sou Cadu!' subtitle='Fala com o pai, que eu te respondo'/>

      <FunctionList commands={commands} />
    </div>
  );
}

export default Assistant;
