import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { routingCommands } from '../../commands/RoutingCommands';
import { key, cx } from '../../environments';
import axios from 'axios';
import './CustomSearch.css';
import FunctionList from '../../components/function-list/FunctionList';

function CustomSearch(props) {
  SpeechRecognition.startListening({ language: 'pt-pt', continuous: true });

  const commands = [
    {
      command: ['Pesquisar *'],
      callback: (term) => {
        setTerm(term);
      },
    },
  ];
  // commands.push(...searchCommands);
  commands.push(...routingCommands);

  const [term, setTerm] = React.useState('');
  const [info, setInfo] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useSpeechRecognition({ commands });

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      if (term) {
        try {
          const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${term}`;
          const response = await axios.get(url);
          if (response) {
            setResults(response.data.items);
            setInfo(response.data.searchInformation);
          }
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    })();
  }, [term]);

  return (
    <div className='CustomSearch'>
      <h1 className='mb-3'>Cadu pesquisador, fala que o pai busca!</h1>

      <FunctionList commands={commands} />

      {loading ? <h1>Buscando {term}...</h1> : ''}

      <div className='search'>
        <div className='search__info'>{info ? `Total de resultados: ${info.totalResults || 0}` : ''}</div>
      </div>
      {results.length > 0
        ? results.map((result) => {
            return (
              <div className='search__details'>
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
