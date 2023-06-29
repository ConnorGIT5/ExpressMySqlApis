#include <stdio.h>
#include <math.h>

int main(){

    double legA;
    double legB;
    double hypo;

    printf("Enter length of leg A: ");
    scanf("%lf", &legA);

    printf("\nEnter length of leg B: ");
    scanf("%lf", &legB);

    hypo = sqrt(pow(legA,2) + pow(legB,2));

    printf("\n Your hpyotenuse is %lf", hypo);

    return 0;
}