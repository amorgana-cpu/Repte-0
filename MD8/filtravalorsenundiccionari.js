const notes = { anna: 8, joan: 6, pau: 9 };


const aprovats = Object.fromEntries(
  Object.entries(notes).filter(([clau, valor]) => valor >= 8)
);


console.log(aprovats);
