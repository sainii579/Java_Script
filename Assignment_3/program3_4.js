// Accept one character from user and convert case of that character.

// Input : a       Output : A
// Input : D       Output : d

function DisplayConvert(cValue)
{
    if(cValue == cValue.toLowerCase())
    {
        console.log(cValue.toUpperCase());
    }
    else if(cValue == cValue.toUpperCase())
    {
        console.log(cValue.toLowerCase(cValue));
    }
}

function main()
{
    let cValue1 = 'a', cValue2 = 'D';

    DisplayConvert(cValue1);
    DisplayConvert(cValue2);
}

main();