import { key, cx } from '../environments';
import axios from 'axios';

export const searchCommands = [
  {
    command: ['Pesquisar *', 'Buscar *'],
    callback: async (term) => {
      try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${term}`;
        const response = await axios.get(url);
        if (response) {
          console.log(response.data.items, response.data.searchInformation);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
];
