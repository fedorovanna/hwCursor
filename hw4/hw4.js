const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students)
{
    const male = [students[0], students[1], students[4]]
    const female = [students[2], students[3], students[5]]
    let pairs = []
    for (let i = 0; i < students.length/2; i++) 
    {
        pairs[i] = [male[i], female[i]]    
    }
    return pairs
}
function getPairsTopic (pairs, themes)
{
    let pairsTopics = []
    for (let i = 0; i < pairs.length; i++) 
    {
        pairsTopics[i] = [pairs[i].join(' i '), themes[i]]    
    }
    return pairsTopics
}

function getStudentsMarks(students, marks)
{
    let studentsMarks = []
    for ( let i =0; i < students.length; i++)
    {
        studentsMarks[i] = [students[i], marks[i]]
    }
    return studentsMarks
}

function getRandomMark(pairs, themes, marks)
{
    let pairsRandomMark = []
    for (let i = 0; i< pairs.length; i++) 
    {
        let mark = Math.floor(Math.random() * 5) + 1
        pairsRandomMark[i]= [pairs[i].join(' i '), themes[i], mark]
    }
    return pairsRandomMark
}
const pairs = getPairs(students)
console.log(pairs)
const pairsTopics = getPairsTopic(pairs, themes)
console.log(pairsTopics)
studentsMarks = getStudentsMarks(students, marks)
console.log(studentsMarks)
pairsRandomMark = getRandomMark(pairs, themes, marks)
console.log(pairsRandomMark)