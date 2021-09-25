export const usefullCommands = [
  {
    command: [`${'Nova' || 'nova'} guia`],
    callback: () => {
      window.open('https://google.com', '_blank');
    },
  },
  {
    command: [`${'Abrir' || 'abrir'} *`],
    callback: (page) => {
      const p = page.toLowerCase().replace(/\s/, '');
      window.open(`https://www.${p}.com`, '_blank');
    },
  },
];
