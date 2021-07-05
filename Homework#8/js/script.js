// Basic
class Student {
  constructor(fullName, university, course, ...marks){
    this.fullName = fullName,
    this.university = university,
    this.course = course,
    this.marks = marks
    this.dismiss = false
  }

    recover() {
      this.dismiss = false 
    }

    expelled() {
      this.dismiss = true;
    }

    get studentMarks (){
      if (this.dismiss) return null
      return this.marks
    }     

    set studentMarks (mark){
      if (this.dismiss) return null
      return this.marks.push(mark)           
    }

    studentInfo() {
    return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`
    }

    averageMarks() {
      if (this.dismiss) 
      return null
      return this.marks.reduce((prev, item) => (prev + item)) / this.marks.length  
    }
};

//advance
class BudgetStudent extends Student {
  constructor(fullName, university, course, ...marks){
    super(fullName, university, course, ...marks,)
  }
  
    getScholarship = () =>{
      if (this.averageMarks() >= 4) 
      setInterval(() => {console.log('Вітаю, Ви отримуєте стипендію 1600грн') }, 30000)
      else 
      setInterval(() => {console.log('Нажаль Ви не отримуєте стипендію') }, 30000)
    }
}

console.group(`Basic`)

const ostap = new Student ('Остап Бендер','Вищої Школи Психотерапії м.Одеса',3, 5,4,4,5)

console.group(`Оцінки зараз`)
  console.log(`Оцінки студента: ` + ostap.studentMarks)
  console.log(`Середня оцінка студента = `+ ostap.averageMarks())
console.groupEnd()

ostap.studentMarks = 5 

console.group(`Оцінки після отримання ще однієї відмітки`)
  console.log(`Оцінки студента стали: ` + ostap.studentMarks)
  console.log(`Середня оцінка студента тепер = `+ ostap.averageMarks())
console.groupEnd()

ostap.expelled()
console.group(`Студента виключено`)
  console.log(`Оцінки студента: ` + ostap.studentMarks)
console.groupEnd()

ostap.recover()

console.group(`Студента поновлено`)
  console.log(`Оцінки студента: ` + ostap.studentMarks)
  console.log(`Середня оцінка студента = `+ ostap.averageMarks())
console.groupEnd()

console.groupEnd()

//advance
console.group(`Advance`)
const viktor = new BudgetStudent ('Віктор Партика','"НТУУ КПІ"', 5, 5,5,5)

console.group(`Студент на бюджеті`)
console.log(viktor.averageMarks())
viktor.getScholarship()
console.groupEnd()

console.groupEnd()
