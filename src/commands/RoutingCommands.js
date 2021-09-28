export const routingCommands = [
  {
    command: ['Navegar para *', 'Ir para *'],
    callback: (page) => {
      const p = page
        .normalize('NFD')
        .replace(/[^a-zA-Zs]/g, '')
        .toLowerCase();
      window.location.pathname = `/${p}`;
    },
  },
];
