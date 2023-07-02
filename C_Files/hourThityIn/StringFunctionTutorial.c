#include <stdio.h>
#include <string.h>

int main()
{

    char string1[] = "Mario";
    char string2[] = "Luigi";


    // strlwr(string1); // lowercase
    //strupr(string1); // uppercase
    // strcat(string1, string2); // string1 + string2
    // strncat(string1, string2, 1); // take only the first char of string2
    // strcpy(string1, string2); // replace contents of string1 with string2
    // strncpy(string1, string2, 1); // copies over only the L. Lario.
    // strset(string1, '?'); // all the characters in the name become question marks
    // strnset(string1, 'Q', 1); // the first character in string1 becomes a 'Q'.
    // strrev(string1); // reverses a string

    // returning ints

    // int result = strlen(string1);
    int result = strcmp(string1, string2); // compares all the characters between two strings. If they're the same, they will return zero.
    // int result = strcmp(string1, string2); 
    // int result = strncmp(string1, string2, 1); // will only compare the first string. EX: Apple and Astronaut will be the same because they both start with 'a'. 
    // int result = strcmpi(string1, string2); // not case-sensitive 
    // int result = strnicmp(string1, string2); // not case-sensitive



    if (result == 0)
    {
        printf("These strings are the same");
    }
    else
    {
        printf("These strings are NOT the same");
    }




    // printf("%s", string1);
    printf("%d", result);
 






    return 0;
}