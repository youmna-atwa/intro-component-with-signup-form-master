function myFunction() {
    let x = document.getElementById("mustfirstName").value;
    let y = document.getElementById("mustLastName").value;
    // let z = document.getElementById("mustEmail").value;
    // let A = document.getElementById("mustPass").value;
    let text , text2;
    

    var  regex = /^[a-zA-Z]+$/;
    if (!x.match(regex) ) {
        text = "Unvalid! FirstName Must Be String";
        document.getElementById("valid").innerHTML = text;

    } else {
        document.getElementById('valid').innerHTML = '';
    }
    if (!y.match(regex)){
        text2 = "Unvalid! LastName Must Be String";
        document.getElementById("valid2").innerHTML = text2;

    }
    else {
        document.getElementById('valid2').innerHTML = '';
    }

   
  }