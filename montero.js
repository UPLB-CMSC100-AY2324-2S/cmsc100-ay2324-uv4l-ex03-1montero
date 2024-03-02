// Function for validating password
function validatePassword(password1, password2) {
    
    // Condition 1
    if (password1 !== password2) {
        return false;
    }

    // Condition 2
    if (password1.length < 8) {
        return false;
    }

    // Condition 3
    let hasNumber = false;
    let hasUpperCase = false;
    let hasLowerCase = false;

    for (let i = 0; i < password1.length; i++) {
        
        // Returns the character at the given index
        const char = password1.charAt(i);

        // Checks if the character is not a number
        if (isNaN(char)) {
            
            // Checks if the character is in uppercase
            if (char === char.toUpperCase()) {
                hasUpperCase = true;
            }

            // If char is not in uppercase it means it is in lowercase
            else {
                hasLowerCase = true;
            }
        }

        // Char has a number
        else {
            hasNumber = true;
        }

        // When all are true
        if (hasNumber && hasUpperCase && hasLowerCase) {
            break;
        }
    }

    // when either one of the conditions are false, return false
    if (!hasNumber || !hasUpperCase || !hasLowerCase) {
        return false;
    }

    return true;
}

// Function for reversing the password
function reversePassword(password) {

    // Initializing an empty string
    let reversedPassword = "";

    // Iterating over the password string 
    for (let i = password.length - 1; i >= 0; i--) {
        // Concatenate each char to reversedPassword
        reversedPassword = reversedPassword + password[i];
    }

    return reversedPassword;
}


// Function for storing the password
function storePassword(name, password1, password2) {

    // Password validation
    const passwordValid = validatePassword(password1, password2);

    // Object that has 2 properties which are name and an empty newPassword
    const result = {
        name: name,
        newpassword: ""
    };

    // Condition 1: if the password is valid, reverse it and set is as the new password
    if (passwordValid) {
        result.newpassword = reversePassword(password1);
    }

    else {
        result.newpassword = password1;
    }

    return result;
}


// Test cases
console.log(validatePassword("helloworld", "hello"));  // returns false
console.log(validatePassword("hello", "hello"));  // returns false
console.log(validatePassword("hello1234", "hello1234"));  // returns false
console.log(validatePassword("Hello1234", "Hello1234"));  // returns true
console.log(validatePassword("HELLO1234", "HELLO1234"));  // returns false

console.log(reversePassword("HELLO1234"));  // returns false


console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")); // returns {name: "John", newpassword:"Pass123"}


