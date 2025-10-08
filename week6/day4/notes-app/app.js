const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const notes = require('./notes.js');

const y = yargs(hideBin(process.argv));

y.command({
  command: 'add',
  describe: 'Ajouter une nouvelle note',
  builder: {
    title: {
      describe: 'Titre de la note',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Contenu de la note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

y.command({
  command: 'remove',
  describe: 'Supprimer une note',
  builder: {
    title: {
      describe: 'Titre de la note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

y.command({
  command: 'list',
  describe: 'Lister toutes les notes',
  handler() {
    notes.listNotes();
  },
});

y.command({
  command: 'read',
  describe: 'Lire une note spécifique',
  builder: {
    title: {
      describe: 'Titre de la note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

y.parse();
