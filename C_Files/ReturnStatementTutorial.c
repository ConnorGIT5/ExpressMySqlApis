#include <stdio.h>

double square(double x){  //sqaure a double and return the value back to the calling function

    return x * x;

}

int main(){

    double x = square(3.14);
    printf("%lf", x);

    return 0;
}
