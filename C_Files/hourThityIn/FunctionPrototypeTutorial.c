#include <stdio.h>

// function prototype
// ensures calls to the function are made with the appropriate arguments
void hello(char[], int);

int main()
{

    // a function declaration without a body before you declare the main function.
    // benefits: calls to a function ar made with the corect number and type of arguments.

    
    char name[] = "Connor";
    int age = 22;

    // hello(name); // throws an error because the prototype made it so chat functions need to take in correct parameters.




    return 0;
}


void hello(char name[], int age)
{
    printf("\nHello %s", name);
    printf("\nYou are %d years old", age);
}
