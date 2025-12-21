// Write a program which accept number from user and print even factors of that number.

// Input : 36
// Output : 2   4   6   8   12  18  36
 
function DisplayEvenFactor(iNo)
{
    let i = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }
    for(i = 1; i <= iNo; i++)
    {
        if(((iNo % i)== 0) && ((i % 2) == 0))
        {
            console.log(i);
        }
    }
}

function main()
{
    let iValue = 36;

    DisplayEvenFactor(iValue);
}

main();