//MY CODE
function mostVowels(sentence) {
   
   const words = sentence.split(/[^A-Za-z]+/).filter(Boolean);
   let maxWord = '';
   let maxCount = 0;
   const vowelRegex = /[aeiou]/gi;

   for (const word of words) {
     
     const matches = word.match(vowelRegex);
     const count = matches ? matches.length : 0;

     if (count > maxCount) {
       maxCount = count;
       maxWord = word;
     }
   }
   return maxWord;
 }
 
 