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
if (skipEven)
{
    console.log('Skipping even numbers')
    for (let i = N; i <= M; i++)
    {
        if (i % 2 != 0)
        {
            {
                sumOfNumbers += i
            }
        }
    }
}
else
{
    for (let i = N; i <= M; i++)
    {
        sumOfNumbers += i;
    }    
}
console.log(`Sum of numbers from ${N} to ${M}: ${sumOfNumbers}`)
