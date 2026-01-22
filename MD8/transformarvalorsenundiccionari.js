const notes = { anna: 8, joan: 6, pau: 9 };


const notesMod = Object.fromEntries(
  Object.entries(notes).map(([clau, valor]) => [clau, valor + 1])
);


console.log(notesMod);
