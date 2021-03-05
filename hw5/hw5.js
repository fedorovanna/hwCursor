function getRandomArray(length, min, max) {
    let randomArray = []
    for (let i = 0; i < length; i++) 
    {
        randomArray[i] = Math.floor(Math.random() * (max - min + 1)) + min        
    }
    return randomArray
}

function getAverage(...numbers) {
    const integerNumbers = numbers.filter(number => Number.isInteger(number))
    const average = integerNumbers.reduce((total, number) => (total + number), 0)/integerNumbers.length
    return average
}

function filterEvenNumbers(...numbers) {
    const oddNumbers = numbers.filter(number => number % 2 != 0).join(', ')
    return oddNumbers
}

function countPositiveNumbers(...numbers) {
    const positiveNumbers = numbers.filter(number => number > 0)
    return positiveNumbers.length
}

function getDividedByFive(...numbers) {
    const dividedByFive = numbers.filter(number => number % 5 == 0).join(', ')
    return dividedByFive
}

function divideByThree(word) {
    let dividedWord = []
    Object.keys(word).forEach(function(letter, i) {
        if (i % 3 == 0) dividedWord.push(word.substring(i, i+3))
    })
    return dividedWord;

}
const randomArray = getRandomArray(5, 1, 14)
console.log('Random array:', randomArray)
const oddNumbers = filterEvenNumbers(1, 2, 3, 4)
console.log('Odd numbers:', oddNumbers)
const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
console.log('Divided by five:', dividedByFive)
const average = getAverage(1, 2, 2.3, 5, 8)
console.log('Average:', average)
const positiveNumbers = countPositiveNumbers(1, -2, 3, -4, -5, 6)
console.log('Positive numbers:', positiveNumbers)
const dividedWord = divideByThree('exceptions')
console.log('Divided word', dividedWord)