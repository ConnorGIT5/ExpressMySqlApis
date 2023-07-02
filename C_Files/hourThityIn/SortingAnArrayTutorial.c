#include <stdio.h>


void printArray(char array[], int size)
{
    for (int i = 0; i < size; i++) 
    {
        printf("%c ",array[i]);
    }
}

void sort(char[], int);

int main()
{
    // int array[] = {9,4,2,7,1,8,6,5,3};
    char array[] = {'F', 'G', 'R', 'A', 'K', 'I', 'P', 'V', 'B', 'C', 'Z', 'S'};
    int size = sizeof(array) / sizeof(array[0]);  // size is the amount of elements in the array

    sort(array, size);

    printArray(array, size);

    return 0;
}

void sort(char array[], int size){

    for(int i = 0; i < size -1; i++)
    {
            
        for(int j = 0; j < size - i - 1; j++)
        {
            if(array[j] > array[j+1]) // +1 checks the element directly to the right of the one that we're examining
            {                         // want it in descending order? Then switch '>' to '<'
                int temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }

        }

    }

}