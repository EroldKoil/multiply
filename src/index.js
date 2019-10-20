module.exports = function multiply(first, second) {
    first = first.split("").reverse();
    second = second.split("").reverse();
/*
    let a = '123'.split("").reverse();
    let b = '321'.split("").reverse();

    let x = summArrays(multiplyArrays(a,b));
    console.log("x = " + x);

*/
    return summArrays(multiplyArrays(first,second));
}


function multiplyArrays(ar1,ar2) {
    let request = [];

    for(let i=0; i<ar1.length; i++ ){
        let array=[];
        for(let j=0; j<ar2.length; j++ ){
            if((i+j)>0) {
                array[0] = i + j;
            }
            let mult = ar1[i]*ar2[j];
            if(mult>9) {
                array[2] = Math.floor(mult / 10);
            }
            array[1] = mult%10;
            request.push(array);
            array = [];
        }
    }/*
    console.log("after mult: ");
    request.forEach(function (el) {
       console.log(el);
    });*/
    return request;
}
function summArrays(ar) {

    var request = ar[0];

    if(ar.length>1) {
        while((request.length-ar[ar.length-1][0])<3){
            request.push(0);
        }
        for (let i = 1; i < ar.length; i++) {

           // console.log("request1 = " + request);
            for (let j = 1; j < ar[i].length; j++) {
                request[j+ar[i][0]] += ar[i][j];
             //   console.log("request2 = " + request);
                request = tryPlus(request, j-1+ar[i][0]);
               // console.log("request3 = " + request);
            }
        }
    }
    else{
        console.log("no summ");
    }

    let solution = request.reverse();
    while(solution[0]==0){
        solution.splice(0,1);
    }
    solution = solution.join();
    solution = solution.replace(/,/g,'');
    let c = 0;
    return solution;
}
function tryPlus(array, j) {
    while(array[j]>9) {
        let number = array[j];
        array[j + 1] += Math.floor(number / 10);
        array[j] = number % 10;
        j++;
    }
    return array;
}