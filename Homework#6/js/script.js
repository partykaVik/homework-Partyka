const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Viktor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


// 1. Список предметів для студента

const getSubjects = student => {
  let studentSubjects = Object.keys(student.subjects);
  studentSubjects = studentSubjects.map(subject =>
    getUserName(subject).replaceAll('_', " ")
  );
  return studentSubjects;
}

console.log(`Список студентів для студента ${students[1].name} ${getSubjects(students[1])}`)

// 2. Середня оцінка для студента

const getAvaregeMarks = (student) =>{
  let studentMarks = Object.values(student.subjects)
  const subjectMarksAverage = [];
  for (let i = 0; i < studentMarks.length; i++) {
    subjectMarksAverage.push(getAverage(Object.values(student.subjects)[i]))
  }
  return getAverage(subjectMarksAverage).toFixed(2)
}
console.log(`Середня оцінка для студента ${students[1].name} ${getAvaregeMarks(students[1])}`)

//3. Інформація про студента

const getStudentInfo = student => {
 const {name, course} = student 
 const studentInfo = {name, course}
 studentInfo.avarageMark = getAvaregeMarks(student)
 return studentInfo
}
 
console.log(`Загальна інформація про студента ${students[0].name}: `, getStudentInfo(students[0]))

//4. Імена студентів в алфавітному порядку

const getStudentsNames = students => {
  const studentsNames = [];
  for(let i = 0; i < students.length; i++){
    studentsNames.push(students[i].name)
  }
  return studentsNames.sort()
}

console.log(`Імена студентів у алфавітному порядку: ${getStudentsNames(students)}`)

// 5

const getBestStudent = students => {
  const bestStudent = []
  const mark = []
  for(let i = 0; i < students.length; i++){
 mark.push(getStudentInfo(students[i]).avarageMark)
  }
 const maxMarks = mark.reduce((prev, item, index) => {
    if (prev < item){
      return index
    }
  })
  return students[maxMarks].name
}


console.log(`Кращого студента звати ${getBestStudent(students)}`)

const calculateWordLetters = word => {
  word = word.toLowerCase()
  const letter = word.split(``)
  const wordLetters = {};
  for (let i = 0; i < word.length; i++) {
    Object.assign(wordLetters, {[letter[i]]: calcLetter(word, letter[i])});
  }
  return wordLetters
}
console.log(calculateWordLetters(`Test`))


// Функція середнє аремфетичне

function getAverage(number) {  
  return number.reduce((prev, item) =>  (prev + item)) / number.length;  
}

// Функція для привидення до нормального регістру

function getUserName(name) {
  return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase()
}

// Функція для підрахунку букв у слові
function calcLetter(word, letter) {
  word = word.toLowerCase()
  letter = letter.toLowerCase()
  const numberOfLetter = word.split(letter).length - 1
  return numberOfLetter
}