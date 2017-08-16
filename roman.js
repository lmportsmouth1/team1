function Roman() {
   
}


Roman.prototype.convertToRoman = function (number) {
    
    var A = [1000, 500, 100, 50, 10, 5, 1];
    var R = ["M", "D", "C", "L", 'X', 'V', 'I'];
    var Result = '';

    while (number > 0){
        for (var i=0; i < A.length; i++) { 
             if (number - A[i]==0) {
                 Result += R[i];
                 return Result;
             }
         }
        for (var i=0; i < A.length; i++) {
            for (var j=0; j < A.length; j++) {
                if (i < j) {
                    if (number - A[i] + A[j] < 4 && number - A[i] + A[j] >= 0) {
                        number -= A[i];
                        number += A[j];
                        Result += R[j];
                        Result += R[i];
                        break;
                    }
                }
            }
        }
        for (var i=0; i < A.length; i++) { 
             if (number - A[i]>0) {
                 Result += R[i];
                 number -= A[i];
             }
         }
    }

    return Result;
    
    
} 

module.exports = Roman;