// import { key, cx } from '../environments';
import axios from 'axios';
import { EventEmitter } from '../utils/EventEmitter';

const cx = process.env.REACT_APP_GOOGLE_CX;
const key = process.env.REACT_APP_GOOGLE_KEY;

export const searchCommands = [
  {
    command: ['Pesquisar *', 'Buscar *'],
    callback: async (term) => {
      if (window.location.pathname !== '/busca') {
        localStorage.setItem('cached-search', term);
        window.location.pathname = '/busca';
      }

      try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${term}`;
        const response = await axios.get(url);
        if (response) {
          EventEmitter.emit('search-result', response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
];
