// Accept one number from user and print that number of * on screen.

function Display(iNo)
{
    let iCnt = 0;
    
    while(iCnt < iNo)
    {
        console.log("*");
        iCnt++; 
    }
}

function main()
{
    let iValue = 10;

    Display(iValue);
}

main();