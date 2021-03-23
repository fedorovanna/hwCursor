const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
    return this.tax * salary
}

function getMiddleTaxes(country){
    return this.tax * this.middleSalary
}

function getTotalTaxes(country){
    return (this.tax * this.middleSalary * this.vacancies)
}

function getMySalary(country){
    setInterval(()=>{
    let obj = {}
    const min = 1500
    const max = 2000
    obj.salary = Math.floor((Math.random() * (max - min)) + min)
    obj.taxes = this.tax * obj.salary
    obj.profit = obj.salary - obj.taxes
    console.log(obj)}, 10000)
}
const yourSalary = 1700
console.log('My tax:', getMyTaxes.call(ukraine, yourSalary))
console.log('Middle tax:', getMiddleTaxes.call(litva))
console.log('Total tax:', getTotalTaxes.call(latvia))
getMySalary.call(litva)