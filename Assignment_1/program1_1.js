// program to divide two numbers

function Divide(iNo1,iNo2)
{
    let iAns = 0;

    if((iNo2 % 2) == 0)
    {
        return -1;
    }

    iAns = Math.floor(iNo1 / iNo2);
    return iAns;
}

function main()
{
    let iValue1 = 11, iValue2 = 5;
    let iRet = 0;

    iRet = Divide(iValue1,iValue2);

    console.log("Division is : ",iRet);
}

main();