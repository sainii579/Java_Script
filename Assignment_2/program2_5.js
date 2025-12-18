// Accept number from user and check whether number is even or odd.

function CheckEven(iNo)
{ 
    if((iNo % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let iValue = 5;
    let bRet = false;

    bRet = CheckEven(iValue);

    // Display result
    if(bRet == true)
    { 
       console.log("number is even");
    }
    else
    {
        console.log("Number is odd");
    }
}

main();