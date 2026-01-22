const notes = { anna: 8, joan: 6, pau: 9 };
const ordenatDesc = Object.entries(notes)
  .sort((a, b) => b[1] - a[1]);


console.log(ordenatDesc);
