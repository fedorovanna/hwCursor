let N 
do
{
 N = parseInt(prompt('Enter the first integer number'))
}
while (N==null||Number.isNaN(N)||N<=0)
let M
do
{
 M = parseInt(prompt('Enter the last integer number'))
}
while (M==null||Number.isNaN(M)||M<=0)
let skipEven = confirm('Skip even numbers?')
sumOfNumbers=0
for (let i = N; i <= M; i++) 
{
    if(skipEven)
    {
        if(i%2!=0)
        {
            sumOfNumbers+=i
        }
    }
    else
    {
        sumOfNumbers +=i;
    }
}
console.log('Sum=', sumOfNumbers)
