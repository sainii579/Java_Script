// Accept two numbers from user and display first number in second number of times.

function Display(iNo, iFrequency)
{
    let iCnt = 0;

    for(iCnt = 1; iCnt <= iFrequency; iCnt++)
    {
        console.log(iNo);
    }
}

function main()
{

    let iValue = 4;
    let iCount = 5;
    
    Display(iValue, iCount);
}

main();