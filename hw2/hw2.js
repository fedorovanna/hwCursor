let N = 0
do
{
 N = parseInt(prompt('Enter the first integer number'))
}
while (N == null || Number.isNaN(N) || N <= 0)
let M = 0
do
{
 M = parseInt(prompt('Enter the last integer number'))
}
while (M == null || Number.isNaN(M) || M <= 0)
let skipEven = confirm('Skip even numbers?')
sumOfNumbers = 0
if (M<N)
{
    let temp = N
    N = M
    M = temp
}
for (let i = N; i <= M; i++) 
{
    if(skipEven)
    {
        console.log('Skipping even numbers')
        if(i % 2 != 0)
        {
            sumOfNumbers += i
        }
    }
    else
    {
        console.log('Not skipping even numbers')
        sumOfNumbers += i;
    }
}
console.log('Sum=', sumOfNumbers)
