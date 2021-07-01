// Basic
class Student {
  constructor(fullName, university, course, ...marks){
    this.fullName = fullName,
    this.university = university,
    this.course = course,
    this.marks = marks
    this.dismiss = function() {
      return this.marks = null;
    }
    this.recover = function() {
      return this.marks = marks;
    }
     }
 get studentInfo() {
 return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`
 }
 set addedStudentMark(mark){ 
   if (this.marks === null) return null
   return this.marks.push(mark)
 }
 get averageMarks() {
  if (this.marks === null) 
  return null
  return this.marks.reduce((prev, item) =>  (prev + item)) / this.marks.length
  }

};


//advance
class BudgetStudent extends Student {
  constructor(fullName, university, course, ...marks){
    super(fullName, university, course, ...marks,)
    setInterval(() => this.getScholarship(), 30000);
    this.getScholarship = function(){
      if (this.averageMarks >= 4){ 
        console.log('Вітаю, Ви отримуєте стипендію 1600грн')
      }
      else {
        console.log('Нажаль Ви не отримуєте стипендію')
      }
    }
}
}

console.group(`Basic`)

const ostap = new Student ('Остап Бендер','Вищої Школи Психотерапії м.Одеса',3, 5,4,4,5)

console.group(`Оцінки зараз`)
  console.log(`Оцінки студента: ` + ostap.marks)
  console.log(`Середня оцінка студента = `+ ostap.averageMarks)
console.groupEnd()

ostap.addedStudentMark = 5 

console.group(`Оцінки після отримання ще однієї відмітки`)
  console.log(`Оцінки студента стали: ` + ostap.marks)
  console.log(`Середня оцінка студента тепер = `+ ostap.averageMarks)
console.groupEnd()

console.log(ostap.dismiss())
console.group(`Студента виключено`)
  console.log(`Оцінки студента: ` + ostap.marks)
console.groupEnd()

ostap.recover()

console.group(`Студента поновлено`)
  console.log(`Оцінки студента: ` + ostap.marks)
  console.log(`Середня оцінка студента = `+ ostap.averageMarks)
  console.log(ostap);
console.groupEnd()

console.groupEnd()

//advance
console.group(`Advance`)
const viktor = new BudgetStudent ('Віктор Партика','"НТУУ КПІ"', 5, 5,4)
console.group(`Студент на бюджеті`)
viktor.getScholarship()
console.groupEnd()

console.groupEnd()
