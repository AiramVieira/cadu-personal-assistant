import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { searchCommands } from '../../commands/SearchCommands';
import './CustomSearch.css';
import FunctionList from '../../components/function-list/FunctionList';
import { EventEmitter } from '../../utils/EventEmitter';
import allCommands from '../../commands/AllCommands';
import ContentHeader from '../../components/content-header/ContentHeader';

function CustomSearch() {
  SpeechRecognition.startListening({ language: 'pt-pt', continuous: true });

  const commands = [...allCommands];
  useSpeechRecognition({ commands });

  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);

  EventEmitter.listen('search-result', (response) => {
    setResults(response.items);
    setInfo(response.searchInformation);
  });

  const cachedSearch = localStorage.getItem('cached-search');
  if (cachedSearch) {
    searchCommands[0].callback(cachedSearch);
    localStorage.removeItem('cached-search');
  }

  return (
    <div className='CustomSearch'>
      <ContentHeader title='Cadu pesquisador!' subtitle='Fala que o pai busca'/>
      <FunctionList commands={commands} />

      {results.length > 0 ? (
        <div className='search'>
          <div className='search__info'>{info ? `Total de resultados: ${info.totalResults || 0}` : ''}</div>
        </div>
      ) : (
        ''
      )}
      {results.length > 0
        ? results.map((result, index) => {
            return (
              <div className='search__details' key={index}>
                <div className='search__title'>
                  <a href={result.link}>{result.title}</a>
                </div>
                <div className='search__description'>
                  <p className='search__description__text'>{result.snippet}</p>
                </div>
              </div>
            );
          })
        : ''}
    </div>
  );
}

export default CustomSearch;
