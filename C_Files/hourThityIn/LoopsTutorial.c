#include <stdio.h>
#include <string.h>


int main()
{

    // for(int i = 10; i >= 1; i--)
    // {
    //     printf("%d\n", i);
    // }

    // // while loop

    // char name[25];


    // printf("\nWhat's your name?: ");
    // fgets(name, 25, stdin);
    // name[strlen(name) -1] = '\0'; // removes the blank space to the right 'name'


    // while(strlen(name) == 0)
    // {
    //     printf("you didn't enter anythin! Enter a name to print to the terminal.");
    

    //     printf("\nWhat's your name?: ");
    //     fgets(name, 25, stdin);
    //     name[strlen(name) -1] = '\0'; // removes the blank space to the right 'name'
        
    // }


    // printf("hello %s", name);


    // int number = 0;
    // int sum = 0;

    // do
    // {
    //     printf("( a negative number will exit the program ) Enter a # above zero: ");
    //     scanf("%d", &number);

    //     if(number>0){
    //         sum = sum + number; // or: sum += number
    //     }
    // }while(number > 0);

    // printf("Sum: %d", sum);


    // int rows;
    // int columns;
    // char symbol;

    // printf("\nEnter # of rows: ");
    // scanf("%d", &rows);


    // printf("Enter # of columns: ");
    // scanf("%d", &columns);

    // for(int i = 1; i <= rows; i++)
    // {
    //     for(int j = 1; j <= columns; j++)
    //     {
    //         printf("%d", j);
    //     }
    //     printf("\n");
    // }

    
    for(int i = 1; i <= 20; i++)
    {
        if( i == 13 )
        {
            continue;
        }
        if (i == 19)
        {
            break; // exits the whole loop
        }

        printf("%d\n", i);
    }

   return 0;
}
