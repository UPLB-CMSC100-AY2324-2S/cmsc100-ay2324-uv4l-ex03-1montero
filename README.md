# Exercise 03: JavaScript Basics part 1

Title: Simulate a password validation program in JavaScript
Type: Individual Assessment
Score: (15 points)

# Code Description:
    - The program contains three (3) functions which are: validatePassword, reversePassword, and storePassword

    I. validatePassword
        - checks for three conditions -> when 3 conditions are all met, it returns true -> if false, it returns false
        - 3 conditions are: if the passwords match, if the passoword has an uppercase, if the password has a lowercase
    II. reversePassword
        - reverses the password, by initializing an empty string where the reversed password will be placed
        - it reverses the password by iterating over it
    III. storePassword
        - validates the password1 first if it matches with password2 -> uses the validatePassword function
        - if the password1 is valid, it then reverses it -> if it's invalid, the password1 becomes the value of the newPassword
        - returns the result after

# Commit Log
    1. initial commit
    2. added montero.js


# References
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN 

