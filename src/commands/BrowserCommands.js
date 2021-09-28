export const browserCommands = [
  {
    command: ['Abrir *'],
    callback: (page) => {
      const p = page.toLowerCase();
      if (p == 'nova guia' || p == 'nova aba') {
        window.open('https://google.com', '_blank');
      } else {
        window.open('http://' + p.split(' ').join(''), '_blank');
      }
    },
  },
];
