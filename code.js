var newdata  = document.getElementById('button2');
var newdata1 = document.getElementById('button1');

newdata.addEventListener('click', myfunction);
newdata1.addEventListener('click', myfunction1);

function myfunction (e) {
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
    e.preventDefault();
};
function myfunction1 (e) {
    var binaryarr = []; // the binary numbers
    var dividerof2 = []; // the dividers
    var decimal = document.getElementById('decimal').value;
      if (decimal == 0) {
            window.alert("bianry = 0")
            windows.alert("omg");
        }
    var divided = parseInt (decimal/2);
    dividerof2.push(divided); 
    var remainder = decimal % 2;
    binaryarr.push(remainder);
    
    for (var i = 0; i<=10; i++){
        var numbers = parseInt (dividerof2[i] / 2);
        var answers = (dividerof2 [i] % 2);
        dividerof2.push(numbers);
        binaryarr.push (answers);       
    //console.log ("the dividers:" + dividerof2 +" " + " the binarys:" + binaryarr);
        if (numbers == 0 && answers == 1) {
        break;
         }  
    }
    for (var t = 0; t<binaryarr.length; t++) {
        var decendingexpo = (binaryarr.length-1) - t;
        var binaryvalues = binaryarr[decendingexpo]; 
        window.alert(binaryvalues);          
    }
e.preventDefault();
}

	
