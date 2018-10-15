function emailValidation(input) {
    let pattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)$/;
    let result = pattern.test(input);
    if (result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

emailValidation('valid@email.bg');
emailValidation('invalid@emai1.bg');