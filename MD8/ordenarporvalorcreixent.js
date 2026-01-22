const notes = { anna: 8, joan: 6, pau: 9 };


const ordenat = Object.entries(notes)
  .sort((a, b) => a[1] - b[1]); // funció fletxa!


console.log(ordenat);
/*
[
  ['joan', 6],
  ['anna', 8],
  ['pau', 9]
]
*/
