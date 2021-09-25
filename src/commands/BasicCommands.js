export const basicCommands = [
  {
    command: ['Hora atual', 'horário atual'],
    callback: () => {
      var tag = document.createElement('h1');
      const date = new Date();
      var text = document.createTextNode(date.toLocaleString());
      tag.appendChild(text);
      var element = document.getElementById('cadu');
      element.appendChild(tag);
    },
  },
  {
    command: ['limpar'],
    callback: ({ resetTranscript }) => resetTranscript(),
  },
];
