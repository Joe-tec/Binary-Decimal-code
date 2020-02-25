var decimal_btn  = document.getElementById('button2');
var binary_btn = document.getElementById('button1');


decimal_btn.addEventListener('click', decimal_decode);
binary_btn.addEventListener('click', binary_decode);

function decimal_decode (e) {
    var binary= document.getElementById('binary').value;
    var binaryarray = binary.split("");
    var accumulator = 0;
    for (var i = 0; i <= binaryarray.length; i++) {
        var decimal = document.getElementById('button').value = accumulator;
        var t = (binaryarray.length-1) - i;
        var calculation = binaryarray[i] * Math.pow(2, t); 
       // console.log("your index "+ i + " your number " + binaryarray[i]);
        accumulator = accumulator + calculation;
    };

    function cleardata(){
        output_box = document.getElementById('bin').value = "";
        document.getElementById('button').value = "";
        document.getElementById('decimal').value = "";
        document.getElementById('binary').value = "";
    }

    setTimeout(cleardata, 6000);
    
    e.preventDefault();
};
function binary_decode (e) {
    var binaryarr = []; // the binary numbers
    var dividerof2 = []; // the dividers
    var decimal = document.getElementById('decimal').value;
    
    
    var divided = parseInt (decimal/2);
    dividerof2.push(divided); 
    var remainder = decimal % 2;
    binaryarr.push(remainder);

    
    for (var i = 0; i<=100; i++){
        var numbers = parseInt (dividerof2[i] / 2);
        var answers = (dividerof2 [i] % 2);
        dividerof2.push(numbers);
        binaryarr.push (answers);       
    //console.log ("the dividers:" + dividerof2 +" " + " the binarys:" + binaryarr);
        if (numbers == 0 && answers == 1) {
        
        break;
         }  
        else if (numbers == 0 && answers == 0){
            break;
        }
    }
    var binaryvalues = [];
    for (var t = binaryarr.length-1; t >= 0; t--) {    
        binaryvalues.push(binaryarr[t]);     
    }
    console.log(binaryvalues);
    var output_box = document.getElementById('bin').value = binaryvalues.toString();
    function cleardata(){
        output_box = document.getElementById('bin').value = "";
        document.getElementById('button').value = "";
        document.getElementById('decimal').value = "";
        document.getElementById('binary').value = "";
    }

    setTimeout(cleardata, 6000);
    
    e.preventDefault();
}


