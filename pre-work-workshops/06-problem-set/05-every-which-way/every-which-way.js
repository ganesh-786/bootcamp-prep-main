// YOUR CODE BELOW
let everyWhichWay=function(a,b,c){
    if (a+b===c)
        return 'sum';
    else if (a-b===c)
        return 'difference';
    else if( a*b===c)
        return 'product';
    else if(a/b===c)
        return 'fraction';
    else
        return null;
    
}
