import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { transcriptCommands } from '../../commands/TranscriptCommands';

function ContentHeader({ title, subtitle }) {
  SpeechRecognition.startListening({ language: 'pt-pt', continuous: true });
  const commands = transcriptCommands;
  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div>
      <h1 className='mb-3'>{title}</h1>
      <p>{subtitle}</p>
      <p>Transcript: {transcript}</p>
    </div>
  );
}

export default ContentHeader;
