# sio-1 Documentation

## How it Compiles

The code is separated line by line using a `for` loop based on the number of `;` symbols, and then each line is split using `;` as a delimiter.

It uses JavaScript methods `.indexOf()` and `.substring()`.

- `.indexOf(string looking for)` returns an index of the string in the given string. For example:

    ```js
    "a p p l e" | "Hello, World"
    0 1 2 3 4   | 0123456789 10 11
    ```

    It returns `-1` if the value doesn't exist.

- `.substring(index1, index2)` returns the substring between the two specified indexes.

    ```js
    let name = "johnny";
    let nickName = name.substring(0, 4);
    console.log(nickName); 
    // This will return "john" in the console
    ```

Then, it checks if something exists on the line using an `if` statement with the condition:

```js
(line.indexOf("thing you are searching for") != -1)
```

# The Code
```js
let code = ``;
```
This is where the code you're compiling is stored as a string in the variable code. The compiler function processes this code to simulate the execution of commands based on the custom language syntax.


# The Function to Compile Code
```js
async function complier (code) { ... }
```
The complier function processes the provided code and compiles it line by line. Here's a breakdown of how it works:


1. Counting Lines
js
Copy
Edit
let amountLines = (code.split(';').length-1);
The code is split into lines using ; as a delimiter, and amountLines stores the number of lines in the code (minus one for the header).

2. Sleep Function
js
Copy
Edit
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
This function pauses execution for a specified number of milliseconds.

3. Variable Lookup Function
js
Copy
Edit
function lookUpVarName(varName) { ... }
This function checks for a variable by its name in the variables array. If found, it returns its value; otherwise, it returns null.

4. Variable Class
js
Copy
Edit
class Variable { ... }
A class is used to store variable information, including name, type, and value.

Main File Check
js
Copy
Edit
if (code.indexOf("run **Main**") == -1) { ... }
This checks if the run **Main** command is present in the code. If not, an error is thrown indicating no main file has been created.

Line-by-Line Execution
For each line of code, different operations are performed. Here's how the compiler processes specific commands:

# 1. Skip Comments
```js
if (line.indexOf("??") != -1) { continue; }
```
If a line contains a comment (??), it is skipped.

# 2. Log Newline
```js
if (line.indexOf("log.ln") != -1) { ... }
```
If the line contains log.ln, it logs a newline to the console, optionally multiple times if specified.

# 3. Log Out String
```js
if (line.indexOf("log.Out.Str") != -1) { ... }
```
If the line contains log.Out.Str, it prints the string inside the parentheses.

# 4. Log Out Integer
```js
if (line.indexOf("log.Out.Int") != -1) { ... }
```
If the line contains log.Out.Int, it prints the integer inside the parentheses.

# 5. Sleep
```js
if (line.indexOf("log.Sleep") != -1) { ... }
```
If the line contains log.Sleep, it pauses execution for the number of seconds specified.

# 6. Log Out Variable
```js
if (line.indexOf("log.Out.Var") != -1) { ... }
```
If the line contains log.Out.Var, it prints the value of the specified variable.

# 7. Math Operations
```js
if (line.indexOf("log.Out.Math") != -1) { ... }
```
If the line contains log.Out.Math, it checks for specific operations (like Plus, Minus, etc.) and prints the corresponding operator or an error message if the operator is incorrect.

# 8. Variable Declaration
```js
if (line.match(/(int|dec|str|clc|prpt) \$\w+ = \(.+\)/)) { ... }
```
If the line matches a variable declaration, it stores the variable's type, name, and value in the variables array. It handles different types (int, dec, str, clc, prpt), converting the value as needed.

int: Converts to an integer.

dec: Converts to a decimal (float).

str: Strips quotes around the string.

prpt: Reads a line of input asynchronously.

clc: Evaluates an expression (using eval()).

# Conclusion
The complier function processes each line of the provided code, performing the appropriate actions based on the custom syntax. It handles printing outputs, variable management, sleep intervals, and basic math operations.



  
