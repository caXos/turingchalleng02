Turing Coding Challenge 02
==========================

### Divisibility Challenge

#### Date taken: 07/06/2024

##### Result: FAIL

So, let´s study to get better!

**Challenge Task:**

Imagine you have a collection of integers in a list, along with two fixed parameters,limit and divisor. Your task is to determine the quantityt of unique contiguous sublists,which contain a maximum of "limit" elements divisible by "divisor".

Two sublists, list1 and list2, are recognized as independente if:

1.  They contain a diferente quantity of elements; or
2.  There's at leas a single position, i, where list1\[i\] isn't equivalente to list2\[i\]

A sublist is identified as na uninterrupted sequence of elements in a list that isn't empty.

**Example 1:**

Input list = \[6,9,9,6,6\], limit = 3, divisor = 3  
Output: 9  
Explanation:  
Every element in the list is divisible by the divisor=3. As per our task constraints, we can only have a maximum of "limit" = 3 elements divisible by 3 within any sublist.  
The 9 unique subslists which satisfy these conditions are: \[6\], \[6,9\], \[6,9,9\], \[9,9,6\], \[9,6\], \[9,6,6\], \[9,9\], \[9\] and \[6,6\].  
Each sublist is unique and has at most "limit" = 3 elements divisible by 3.

**Example 2:**

Input list = \[5, 10, 15, 20\], limit = 4, divisor = 6  
Output: 10  
Explanation:  
Every element in the list is divisible by the divisor = 5. Any sublist will have at most 4 elements that are divisible by 5. Because of this, there are 10 sublists that fulfill the conditions.

**Constraints:**

1.  The length of the list is between 1 and 200, inclusive;
2.  The elements of the list and the divisor are between 1 and 200, inclusive.
3.  The limit is less than or equal to the length of the list.

Check console for sublists maps (valid and invalid ones)