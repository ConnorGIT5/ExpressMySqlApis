#include <stdio.h>
#include <ctype.h>

int main(){

    char unit;
    float temp;

    printf("\nIs the tempurature in (F) or (C)?: ");
    scanf("%c", &unit);

    unit = toupper(unit); // input is no longer case sensitive

    if(unit == 'C'){
        printf("Enter the temp in celcius: ");
        scanf("%f", &temp);
        temp = (temp * 9 / 5) + 32;
        printf("Temp in fahrenheit: %.1f", temp);

    }
    else if(unit == 'F'){
        printf("Enter the temp in fahrenheit: ");
        scanf("%f", &temp);
        temp = ((temp - 32) * 5) / 9;
        printf("Temp in celcius: %.1f", temp);

    }
    else{
        printf("\n%c is not a valid unit of measurement", unit);

    }

    return 0;
}