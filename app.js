                                                          // SHAHID HASHMI  


var n = 5; // I am assinging this value in var because I will use this variable multiple times you can use let.
let alfa = ["A","B","C","D","E"];

let patternOne = "";

for (let i = 0; i < n; i++) {                               // This Outer Loop will create Row for us.
    for (let j = 0; j < n; j++) {                            // This Inner Loop will Create Column for us. 
        patternOne += "*";                                      // Make sure You use (+=) operator otherwise it will return only one Star.
                                                   
        // patternOne = patternOne + "*"                         We can also use this istead of (+=) but this is hardcode.
    }
    patternOne += "\n";
}
console.log(patternOne); // Consoling the PatternOne.
                                                                        




// ========================================================= patternTwo =====================================================


let patternTwo = '';

for(let i = 0;i<n;i++ ){                     // This Outer Loop will create Row for us.   
    for(let j=0;j<= i;j++){                  // This Inner Loop will Create Column for us And it will run I times.
        patternTwo += '*'                    // Make sure You use (+=) operator otherwise it will return only one Star.

        // patternOne = patternOne + "*"                         We can also use this istead of (+=) but this is hardcode.
    }
    patternTwo += '\n';
}

console.log(patternTwo); // Consoling the PatternTwo.


// ============================================================ PatternThree ====================================================


let patternThree = '';                          
for(let i=1;i<=n;i++){
    for(let j=1;j<= i;j++){                 // This Method is the same as before the diffrence is its giving Number istead of Star.
        patternThree += j
    }

    patternThree += '\n';
}

console.log(patternThree);   // Consoling the PatternThree.


// =========================================================== PatternFour =========================================================




let patternFour = '';

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        patternFour += i           // This Method is the same as before the diffrence is its printing I istead of J.
    }
    patternFour += '\n';
}
console.log(patternFour);


// ============================================================== PatternFive ======================================================


let PatternFive = '';

for(let i=0;i<n;i++){
    for(let j = n;j>i;j--){
    PatternFive += "*"
    }
    PatternFive += "\n";
}
console.log(PatternFive);



// ================================================================  PatternSix =====================================================



let patternSix = '';

for(let i=0; i<n;i++){
    for(let j=1;j<=n - i;j++){
        patternSix += j
    }
    patternSix += '\n';
}

console.log(patternSix);


// ================================================================== PatternSeven ================================================


let patternSeven = "";

for(let i = 0; i<n;i++){

    for(let j=n;j>i;j--){
        patternSeven += " "
    }
    for(let j=0;j<i*2+1;j++){
        patternSeven += "*";
    }
    for(let j=n;j>i;j--){
        patternSeven += " "
    }
    patternSeven += '\n';
}
console.log(patternSeven);


// ======================================================= PatternEight ===============================================


let patternEight = '';

for(let i=0;i<n;i++){
    
    for(let j=0;j<i;j++){
        patternEight += " "
    }
    for(let j=1;j< 2*n - i*2;j++){
        patternEight += "*"
    }
    for(let j=0;j<i;j++){
        patternEight += " "
    }

    patternEight += "\n";
}
console.log(patternEight);








// =================================================================== PatternNine ================================


let patternNine = '';

for(let i=0;i< 2*n;i++){
    let star = i
    for(let j=0;j< star;j++){
        patternNine += "*";
        if(i>n){
            star = 2*n -i
        }
    }

    patternNine +='\n';
}

console.log(patternNine);



// ======================================================= PatternEleven ==============================================



let PatternEleven = "";
let start = 1;

for(let i=0;i<n;i++){      
    if(i % 2== 0){
        start = 1
    }else{
        start = 0;
    }
 
    for(let j=0;j<=i;j++){
        PatternEleven += start;
        start = 1 - start;
    }
      PatternEleven +='\n';
}
console.log(PatternEleven);


// ====================================================== PatternTwelve ===================================================



let patternTwelve = '';

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
      patternTwelve += j
    }

    for(let j = 0; j< n*2 -i*2;j++){
      patternTwelve += " ";
    }

    for(let j = i;j>=1; j--){
      patternTwelve+= j;
    }

    patternTwelve += "\n"
}
console.log(patternTwelve);



// ==================================================== PatternThirteen ===============================================

let patternThirteen = '';
let num = 1

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        patternThirteen+= num;
        
        num = num+1   
    }
    patternThirteen += '\n';
}
console.log(patternThirteen);


// =================================================== patternFouteen =========================================================



let patternFourteen = '';

for(let i=0;i<n;i++){
    for(let j =0;j< i;j++){
        patternFourteen += alfa[j]
    }
    patternFourteen +='\n';
}
console.log(patternFourteen);


// =================================================== patternFivteen =========================================================


let  patternFivteen = '';

for(let  i=0;i<alfa.length;i++){
    for(let j=0;j<=i ;j++){
        patternFivteen += alfa[i]
    }
    patternFivteen+= '\n';
}
console.log( patternFivteen);


// ===================================================== patternSixteen ================================================


let patternSixteen = ''

for(let i=0;i<n;i++){

    for(let j=0;j < n-i;j++){
        patternSixteen += alfa[j]
    }

    patternSixteen +='\n';
}

console.log(patternSixteen);


// ========================================================= patternSeventeen ===============================================

let patternSeventeen = '';

for(let i=0;i<n;i++){
    for(let j=n -i;j< n ;j++){
        patternSeventeen += alfa[j]
    }
    patternSeventeen +='\n';
}

console.log(patternSeventeen);



// =========================================================== patternEighteen ====================================================

let iniS = 0;
let patternEighteen = '';

for(let i=0;i<n;i++){
    for(let j=0;j<n -i;j++){
        patternEighteen += "*"
    }
    for(let j=0;j<iniS;j++){
        patternEighteen += " "
    }
    for(let j=0;j<n -i;j++){
        patternEighteen += "*"
    }
    iniS += 2
    patternEighteen += "\n";
      
}
iniS = 8
for(let i=0;i<n;i++){
    for(let j=1;j<=i;j++){
        patternEighteen += "*"
    }
    for(let j=0;j<=iniS;j++){
        patternEighteen += " "
    }
    for(let j=1;j<=i;j++){
        patternEighteen += "*"
    }
    iniS -= 2
    patternEighteen += "\n";

}
console.log(patternEighteen);


// ========================================================= PatternNinteen =================================================


let patternNinteen = '';
let  space = 2*n -2;

for(let i=1;i<= 2*n -1;i++){
    let star = i;
     if(i>n){
        star = 2*n -i;
     }

    for(let j=0;j<star;j++){
        patternNinteen += "*"
      
    }
    for(let j=1;j<space;j++){
        patternNinteen += " "
       
    }
    for(let j=0;j<star;j++){
        patternNinteen += "*"
       
    }
    patternNinteen += '\n';
    if(i<n){
        space -= 2
    }else{
        space +=2
    }
}
console.log(patternNinteen);



// ========================================================= PatternTwenty =================================================

let PatternTwenty = '';

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(i== 0 || j == 0 || i == n-1 || j == n-1){
            PatternTwenty += "*"
        }else{
            PatternTwenty += ' '
        }
    }
    PatternTwenty += "\n"
}


console.log(PatternTwenty);


// ========================================================================


// =========================================== New Pettern added ===========================================

function square(size){
    let str = "";
    for(let i = 0; i<= (2*size); i++){
        str += "="
    }
    str += "\n"
    for(let i = 1; i<= size - 1; i++){
        str += "|"
        for(let j = 1; j < (2*size); j++){
            str += " "
        }
        str +="|"
        str += "\n"
    }
    for(let i = 0; i<= (2*size); i++){
        str += "="
    }
    return str
}
console.log(square(10));


function squareWith(size, top,left,right,down){
    let str = "";
    for(let i = 0; i<= (2*size); i++){
        str += top
    }
    str += "\n"
    for(let i = 1; i<= size - 1; i++){
        str += left
        for(let j = 1; j < (2*size); j++){
            str += " "
        }
        str += right
        str += "\n"
    }
    for(let i = 0; i<= (2*size); i++){
        str += down
    }
    return str
}
console.log(squareWith(10,"=","+","&","*"));

