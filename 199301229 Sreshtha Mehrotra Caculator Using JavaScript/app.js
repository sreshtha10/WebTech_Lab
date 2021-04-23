const numbers = document.getElementsByClassName("number");
//console.log(numbers);

Array.from(numbers).forEach(function(number){
    number.addEventListener("click",numberClicked);
});

function numberClicked(e){
    //console.log(e.target.textContent);
    const label = document.getElementById("resultValue");
    label.innerHTML = e.target.textContent ;
}
