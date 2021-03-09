function getMaxDigit(number) {
    let max = 0
    while (number != 0)
    {
        let remainder = number % 10
        max = Math.max (remainder, max)
        number = number / 10
    }
    return max
}

function upperLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

function taxLeftover(salary) {
    let tax = 18 + 1.5
    return salary - (salary * tax)/100
}

function counLetter (letter, word) {
    let count = 0
    for (let i = 0; i < word.length; i++) 
    {
        if (word.charAt(i) == letter)
        {
            count++
        }
    }
    return count
}

function convertCurrency(money, dollarRate) {
    convertedMoney = 0
    for (let i = 0; i < money.length; i++) {
        if (money.charAt(i) == '$') {
            convertedMoney = parseInt(money) * dollarRate
        }
        else if (money.charAt(i).toUpperCase() == 'U' &&
        money.charAt(i+1).toUpperCase() == 'A' &&
        money.charAt(i+2).toUpperCase() == 'H') {
            convertedMoney = parseInt(money) / dollarRate 
        }        
    }
    return convertedMoney
}

function deleteLetter (letter, word)
{
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == letter) {
            word = word.replace(word.charAt(i), '')
        }
    }
    return word
}

console.log('sNoW =>', upperLetter('sNoW'))
console.log('Max digit in 8549', getMaxDigit('8549'))
console.log('Salary (1000)', taxLeftover(1000))
console.log('Letter o in the word console:', counLetter('o', 'console'))
console.log('100$ =', convertCurrency('100$', 25), '2500UAH=', convertCurrency('2500uah', 25))
console.log('Delete letter o in the word concole:', deleteLetter('o', 'console'))
