// Write a program which accept one number from user and print that number of even numbers on screen.

function PrintEven(iNo)
{ 
    let i = 0;
    let iEvenNum = 0;

    if(iNo <= 0)
    {
        return;
    }

    for(i = 1; i <= iNo; i++)
    {
        console.log("%d\n", iEvenNum);
        iEvenNum = iEvenNum + 2;
    } 
}

function main()
{
    let iValue = 6;

    PrintEven(iValue);
}

main();