/*
Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.

99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!

*/

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num>0/* your stop condition goes here */) 
{
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    
    
    if((num===2) || (num===1) )
    {
           if(num===2)
      {
         console.log(+num+' bottles of juice on the wall! '+num+' bottles of juice! Take one down, pass it around... '+--num+' bottle of juice on the wall!');
   
      }
       else if(num===1)
         {
             console.log(+num+' bottle of juice on the wall! '+num+' bottle of juice! Take one down, pass it around... '+--num+' bottles of juice on the wall!');
   
         }
    }
    else
    {
       console.log(+num+' bottles of juice on the wall! '+num+' bottles of juice! Take one down, pass it around... '+--num+' bottles of juice on the wall!');

    }
    
    
    
    num++;
    num--;
}

   
