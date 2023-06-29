#include <stdio.h>

int findMax(int x, int y)
{

    return (x > y) ? x : y;  // x in the true statement...    y: in the false statement

}

int main(){

    int max = findMax(3, 4);

    printf("%d", max);

    return 0;
}