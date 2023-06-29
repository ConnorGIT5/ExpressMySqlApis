#include <stdio.h>

int main(){

    // int age;

    // printf("\nEnter your age: ");
    // scanf("%d", &age);

    // if(age >= 18){
    //     printf("You are now signed up! ✅");
    // }
    // else if(age < 0){
    //     printf("You haven't been born yet 😔");
    // }
    // else{
    //     printf("You are too young to sign up!❌");
    // }

    char grade;
    printf("\nEnter a letter grade: ");
    scanf("%c", &grade);

    switch(grade){

        case 'A':
            printf("Perfect\n");
            break;
        case 'B':
            printf("Good job!\n");
            break;
        case 'C':
            printf("You did ok\n");
            break;
        case 'D':
            printf("Apply yourself!");
            break;
        default:
            printf("please enter a valid grade");

    }

    return 0;
}