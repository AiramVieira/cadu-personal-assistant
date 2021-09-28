import { timeCommands } from './TimeCommands';
import { searchCommands } from './SearchCommands';
import { routingCommands } from './RoutingCommands';
import { browserCommands } from './BrowserCommands';
import { transcriptCommands } from './TranscriptCommands';
import { SpeakMessage } from '../service/speaker/Speaker';

export const commandListCommands = [
  {
    command: ['Listar comandos', 'Listar funções'],
    callback: () => {
      const readFunctions = (list) => {
        let text = '';

        for (let i = 0; i < list.length; i++) {
          text = list[i].command.join(' ou ');
          text = text.replaceAll('*', '\"palavra chave\"');
          SpeakMessage(text);
        }
      };

      readFunctions(timeCommands);
      readFunctions(searchCommands);
      readFunctions(transcriptCommands);
      readFunctions(routingCommands);
      readFunctions(browserCommands);
    },
  },
];
