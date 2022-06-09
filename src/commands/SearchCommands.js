import axios from 'axios';
import { EventEmitter } from '../utils/EventEmitter';
// import {environment as env} from '../environments/environments'

// const cx = env.googleCx;
// const key = env.googleKey;

export const searchCommands = [
  {
    command: ['Pesquisar *', 'Buscar *'],
    callback: async (term) => {
      // if (window.location.pathname !== '/busca') {
      //   localStorage.setItem('cached-search', term);
      //   window.location.pathname = '/busca';
      // }

      // try {
      //   const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${term}`;
      //   const response = await axios.get(url);
      //   if (response) {
      //     EventEmitter.emit('search-result', response.data);
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    },
  },
];
