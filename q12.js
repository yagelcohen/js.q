let sum = 0;
function multiples(number){
for (let i = 0; i <number; i++)
{if (i % 3 === 0 || i % 5 === 0)
    {
       sum += i;
    }
}
console.log(sum);
}
multiples(1000)