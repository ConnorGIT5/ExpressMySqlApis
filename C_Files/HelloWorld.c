#include <stdio.h>
#include <stdbool.h>

int main(){

    // // my comment

    // /* This is my 
    // multi-line 
    // comment */

    // printf("Hello user!\n");
    // printf("IM\t USING\t C\t\n");
    // printf("\"I am a Goat, I am a man.\" - Gunna");


    // !!!!!!!!!!!!! VARIABLES !!!!!!!!!!!!! VARIABLES !!!!!!!!!!!!! VARIABLES !!!!!!!!!!!!! VARIABLES !!!!!!!!!!!!! VARIABLES !!!!!!!!!!!!! VARIABLES !!!!!!!!!!!!! VARIABLES !!!!!!!!!!!!! VARIABLES


    // int x; // declaration
    // x = 123; // initialization
    // int y = 321;

    // int age = 22; // integer whole number
    // float gpa = 3.18; // contains decimals
    // char grade = 'C'; // single characters

    // char name[] = "Daniel"; // an array of characters

    // printf("Hello %s\n",name);
    // printf("You are %d years old\n",age);
    // printf("Your average grade is %c\n",grade);
    // printf("Your gpa is %f\n",gpa);


    // !!!!!!!!!!! DATA TYPES !!!!!!!!!!! DATA TYPES !!!!!!!!!!! DATA TYPES !!!!!!!!!!! DATA TYPES !!!!!!!!!!! DATA TYPES !!!!!!!!!!! DATA TYPES !!!!!!!!!!! DATA TYPES !!!!!!!!!!! DATA TYPES

    char a = 'C';                 // %c
    char b[] = "David";           // %s
 
    float c = 3.14159;            // 4 bytes (32 bits) 6-7 digits %f
    double d = 3.14159265358;     // 8 btytes (64 bits) 15-16 digits %lf
 
    bool e = true;                // 1 byte %d

    int j = 12343215;             // 4 btyes ~2.1 billion %d
 
    printf("%0.25f\n", c);
    printf("%0.25lf\n", d);

    printf("%d\n", e);

    char f = 100;                // 1 btye (-128 to +127) %d (decimal) or %c (character)... if %c, then it will be converted using ascii

    printf("%c\n", f);           // if %d then 100, if %c then d

    unsigned char g = 253;       // 1 byte (0 to +255) %d or %c

    printf("%d\n",g);

    short /*int*/ h = 32432;         // 2 bytes(-32,768 to +32,768) %d. You can include 'int' if you want

    printf("%d\n", h);
    printf("hello long int\n");

    long long int longInt = 43433212394752;  // 8 bytes (+-9 quintillion) %lld    

    printf("%lld\n", longInt);

    unsigned long long int hi = 843251543134235U;  // 18 quintillion
    printf("%llu", hi);


return 0;
}

// escape sequences: \n: new line... \t: tab
