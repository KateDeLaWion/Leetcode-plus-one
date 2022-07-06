var plusOne = function(digits) {
    for (let i = digits.length - 1; i>= 0; i--) {
        
      if (digits[i] !== 9){
          digits[i]++;
         return digits;
                          }
     else {
      digits[i] = 0; // every 9 at any index position will be added 1 up to 10
          }
       
    }
    
digits.unshift(1);  // this step is used only when all the numbers are 9
return digits;      // this step is used only when all the numbers are 9
    
};