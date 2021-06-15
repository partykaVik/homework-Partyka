const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


//1
function getPairs() {
  const pairs = [
    [students[0], students[5],],
    [students[1], students[3],],
    [students[4], students[2],],
  ].concat()
  return pairs
}
const studentPairs = getPairs()
console.log(studentPairs)

//2
function getThemes(studentPairs, themes) { 
  let themesForSrudents = [];
  for (let i = 0; i < studentPairs.length; i++)
  themesForSrudents[i] = [studentPairs[i].join(` і `)].concat(themes[i])
  return themesForSrudents
}
const studentThemes = getThemes(studentPairs, themes)
console.log(studentThemes)

//3
function getMarks(students, marks) { 
  let marksForSrudents = [];
  for (let i = 0; i < students.length; i++)
  marksForSrudents[i] = [students[i]].concat(marks[i])
  return marksForSrudents
}
const studentMarks = getMarks(students, marks)
console.log(studentMarks)

//4
function getPairsMarks(studentThemes) { 
  let pairsMarks = [];
  for (let i = 0; i < studentThemes.length; i++)
  pairsMarks[i] = [studentThemes[i].concat([Math.floor((Math.random() * (5 - 1 + 1) ) + 1)])]
  return pairsMarks
}
const studentPairsMarks = getPairsMarks(studentThemes)
console.log(studentPairsMarks)