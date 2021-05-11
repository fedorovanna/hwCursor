const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
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

  function getSubjects(students){
      const studentSubjects = Object.keys(students.subjects).map(subject => {
          return subject.charAt(0).toUpperCase() + subject.slice(1).replace('_', ' ')          
      });
      return studentSubjects
  }

  function getAverageMark(students){
      let sum = (total, number) => total + number
      const studentsAveMark = Object.values(students.subjects).flat()
      .reduce(sum, 0) / Object.values(students.subjects).flat().length
      return studentsAveMark.toFixed(2)
  }

  function getStudentInfo(student){
      const course = student.course
      const name = student.name
      const aveMark = getAverageMark(student)
      return {course, name, aveMark}
  }

  function getStudentsNames(students){
    studentsNames = students.map( student => {
        return student.name
    }).sort()
    return studentsNames
  }

  export function getBestStudent(students){
      let studentAverages = []
      students.map(student => {
          studentAverages.push(getAverageMark(student))
      })
      const maxMark = Math.max(...studentAverages).toFixed(2)
      const bestStudent = students[studentAverages.indexOf(maxMark)].name
      return bestStudent
  }

  function calculateWordLetters(word){
      let letters = {}
      Object.keys(word).forEach(function(l, i) {
          l = word.charAt(i)
          letters[l] = (isNaN(letters[l]) ? 1 : letters [l]+1)
      })
      return letters
  }

  //console.log('Student name and subjects', students[0].name, getSubjects(students[0]))
  //console.log('Student average:',students[1].name, getAverageMark(students[1]))
  //console.log('Student info:', getStudentInfo(students[2]))
  //console.log('Students names:', getStudentsNames(students))
  console.log('Best student:', getBestStudent(students))
  let word = 'test'
  //console.log(word, calculateWordLetters(word))