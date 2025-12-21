// Accept on character from user and check whether that character is vowel(a,e,i,o,u) or not.

// Input : E    Output : TRUE
// Input : d    Output : FALSE

function CheckVowel(cVowel)
{   
    if(cVowel == 'a' || cVowel == 'e' || cVowel == 'i' || cVowel == 'o' || cVowel == 'u' || cVowel == 'A' || cVowel == 'E' || cVowel == 'I' || cVowel == 'O' || cVowel == 'U' )
    {
       console.log("It is Vowel");
    }
    else
    {
        console.log("It is not Vowel");
    }
}

function main()
{
    let cValue = 'd';

    let bRet = false;

    bRet = CheckVowel(cValue);

    if(bRet == true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

main();