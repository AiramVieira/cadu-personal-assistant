import { SpeakMessage } from '../service/speaker/Speaker';

export const timeCommands = [
  {
    command: ['Hora atual', 'Horário atual', 'Que horas são'],
    callback: () => {
      const date = new Date();
      SpeakMessage(date.toLocaleTimeString());
    },
  },
  {
    command: ['Dia atual', 'Que dia é hoje'],
    callback: () => {
      const date = new Date();
      SpeakMessage(date.toLocaleDateString());
    },
  },
];
