// Accept one number from user and print that number of * on screen.

function Display (iNo)
{
    while(iNo > 0)
    {
        console.log("*");
        iNo--;
    }
}

function main()
{
    let iValue = 4;

    Display(iValue);
}

main();