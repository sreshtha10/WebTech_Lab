function getHistory(){
    return document.getElementById("historyValue").innerText;
}

function printHistory(num){
    document.getElementById("historyValue").innerText = num;
}


function printResult(num){
    if(num == ""){
        document.getElementById("resultValue").innerText = " ";
    }
    else{
        document.getElementById("resultValue").innerText = getFormattedNumber(num);
    }
   
}

function getResult(){
    return document.getElementById("resultValue").innerText;
}


function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function convertToNumber(num){
    return Number(num.replace(/,/g,''));
}

const operations  = document.getElementsByClassName("operator");

Array.from(operations).forEach(function(operator){
    operator.addEventListener("click",operatorClicked);
});

function operatorClicked(e){
    //clear
    if(e.target.id == "clear"){
        printHistory("");
        printResult("");
    }

    // backspace
    else if(e.target.id == "backspace"){
        var output = convertToNumber(getResult()).toString();
        if(output){
            output  = output.substr(0,output.length-1);
            printResult(output);
        }
    }
    // operations 
    else {
        var output = getResult();
        var history = getHistory();
        if(output != ""){
            if(e.target.id == "="){
                var operand = getResult();
                history = history+operand;
                printHistory(history);
                var result  = eval(history);
                printResult(result);
            }
            else{
                output = (convertToNumber(output)).toString();
                history = output+e.target.id +history;
                printHistory(history);
                printResult("");
            }
        }
        else{
            history = history+(e.target.id);
            console.log(history);
            printHistory(history);
            printResult("");
        }
    }

    

}


const numbers = document.getElementsByClassName("number");

Array.from(numbers).forEach(function(number){
    number.addEventListener("click",numberClicked);
});


function numberClicked(e){
    var output = convertToNumber(getResult());
    if(output != NaN){
        output = output + e.target.id;
        printResult(output);
    }
}






