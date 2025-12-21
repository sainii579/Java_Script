// Write a program which accept number from user and print even factors of that number.

// Input : 24
// Otput : 1    2    3    4     6    8   12  24

function DisplayFactor(iNo)
{
    let i = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }
    for(i = 1; i <= iNo; i++)
    {
        if((iNo % i) == 0) 
        {
            console.log(i);
        }
    }
}

function main()
{
    let iValue = 24;

    DisplayFactor(iValue);
}

main();