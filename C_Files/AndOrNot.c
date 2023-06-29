// code tutorial from Bro Code on YouTube

#include <stdio.h>
#include <stdbool.h>

int main(){

    // float temp = 3;
    // bool sunny = true;

    // if(temp >= 0 && temp <= 30 && sunny){
    //     printf("It's good out");
    // }
    // else{
    //     printf("The weather is bad");
    // }

// float temp = 10;

// if(temp <= 0 || temp >= 30){
//     printf("\n The weather is bad");
//   } 
// else{
//     printf("\nThe weather is Good!");
//     }
    
    bool sunny = true;

    if(!sunny){
        printf("\nIt's cloudy outside");
    }
    else{
        printf("\nIt's sunny outside");
    }


    return 0; 

}