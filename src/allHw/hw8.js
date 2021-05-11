export class Student {
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.allMarks = []
    }

    get marks() {
        return this.allMarks
    }

    set marks(newMark) {
        if(this.allMarks != null) {
            this.allMarks.push(newMark)
        }
    }

    getInfo(){
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }
    
    getAverageMark(){
        if(this.allMarks != null) {
            return this.allMarks.reduce((total, number) => (total + number), 0)/this.allMarks.length 
        }
    }

    dismiss(){
        this.allMarks = null
    }

    recover(){
        this.allMarks = []
    }
}

class BudgetStudent extends Student {
    constructor(university, course, fullName)
    {
        super(university, course, fullName);
        setInterval(()=>{
            this.getScholarship()
        }, 30000)
    }

    getScholarship(){
        if(this.getAverageMark() > 4.0 && this.allMarks != null)
        return 'Ви отримали 1400 грн. стипендії'
    }
}

const student1 = new Student('ЛНУ ім. І. Франка', 4, 'Степан Марченко')
student1.marks = 5
student1.marks = 4
student1.marks = 5
student1.marks = 5
student1.marks = 3
console.log(student1.getInfo())
const student2 = new BudgetStudent('ЛНУ ім. І. Франка', 2, 'Іванюк Тетяна')
student2.marks = 5
student2.marks = 5
student2.marks = 5
student2.marks = 4
student2.marks = 4
//console.log(student2.getScholarship())
student2.dismiss()
//console.log(student2.getScholarship())
