// Accept onr number from user and print that number of * on screen.

function Accept(iNo)
{
    let iCnt = 0;

    for(iCnt = 0; iCnt < iNo; iCnt++)
    {
        console.log("*");
    }
}
 
function main()
{
    let iValue = 0;
    iValue = 5;

    Accept(iValue);
}

main();