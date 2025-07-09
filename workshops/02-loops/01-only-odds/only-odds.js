// YOUR CODE BELOW
function onlyOdds(num){
    let result=0;
    for(i=num; i>0; i--){
        if(i%2!==0){
            result=result+i;
            
        }
        
    }
    return result;

}