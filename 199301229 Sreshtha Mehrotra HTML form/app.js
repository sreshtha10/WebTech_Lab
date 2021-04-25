var btn = document.getElementById("btn");
btn.addEventListener("click", submit);

function submit(e) {
    var inputs = document.getElementsByTagName("input");
    var count = 0;
    Array.from(inputs).forEach(function (ip) {
        if (ip.value.length == 0) {
            count += 1;
        }
    });
    if (count > 0) {
        alert("All the fields are mandatory");
        return;
    }
    

    // password check
    
    // regex to check if the password starts with alphabet
    const startRegex=  /^[A-Za-z]/;

    // regex to check it doesn't have any spaces
    const spaceRegex = /[\s]/;

    // regex to check it don't have any special characters
    const specialCharRegex = /[~`!#$%\^@&*+=\-\[\]\\';,/{}|\\":<>\?]/;
    var pwd = document.getElementById("pwd");
    if(pwd.value.length <= 7){
        alert("Password length must be greater than 7 !");
        return;
    }
    if(spaceRegex.test(pwd.value)){
        alert("Spaces are not allowed in Password !");
        return;
    }
    if(!startRegex.test(pwd.value)){
        alert("Password must begin with an alphabet !");
        return;
    }
    if(specialCharRegex.test(pwd.value)){
        alert("Password cannot have special characters !");
        return;
    }


    alert("Form successfully submitted");
    window.location.reload();

}


