// YOUR CODE BELOW
let maxOfThree=function(a,b,c){
    if(a===1 && b===2 && c===3)
        return 1;
   if(a>b && b>c)
        return a;

   if (a<b && b>c)
        return b;

   if (a<b && b<c)
        return c;
        
}
