#include <stdio.h>
#include <string.h>

int main(){
    // // constant are fixed values that can't be changed

    // const float PI = 3.14159;

    // PI = 999.30;

    // printf("%f", PI);

    // int x = 5;
    // int y = 2;
 
    // float z = x / (float) y;

    // printf("%f\n", z);

    // x++;

    // printf("%d",x);

    // double prices[] = {5.0, 10.0, 15.0, 25.0, 20, 30};

    

    // for(int i = 0; i < 5; i++){
    //     printf("%.2lf\n", prices[i]);
    // }

    // int x = 10;

    // // x+=2;

    // x/=5;

    // printf("%d", x);

    char name[25]; //bytes
    int age;
    printf("\nWhat's your name? ");
    
    // scanf("%s", &name);

    fgets(name, 25, stdin);         
    name[strlen(name)-1] = '\0';  // this gets rid of the new line character that is attached to name after running the strlen function

    printf("How old are you? ");
    scanf("%d", &age);
    printf("\nYou are %d years old", age);
    printf("\nHow are you, %s?", name);

    


    return 0;
}