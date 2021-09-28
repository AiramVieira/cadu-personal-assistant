export const browserCommands = [
  {
    command: ['Nova guia', 'Nova aba'],
    callback: () => {
      window.open('https://google.com', '_blank');
    },
  },
  {
    command: [`${'Abrir' || 'abrir'} *`],
    callback: (page) => {
      window.open("http://" + page.split(" ").join(""), '_blank');
    },
  },
];
