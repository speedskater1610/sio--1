//the code that you are running just put it in the code var
let code = ``;


//the function to compile code
async function complier (code) {
    let amountLines = (code.split(';').length-1);
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    let variables = []; // Array to store variables

    function lookUpVarName(varName) {
        let variable = variables.find(v => v.name === varName);
        return variable ? variable.value : null;
    }

    class Variable {
        constructor(name, type, value) {
            this.name = name;
            this.type = type;
            this.value = value;
        }
    }

    if (code.indexOf("run **Main**") == -1) {
        throw new Error("No \"Main\" file created");
    }

    for (let i = 1; i < amountLines-1; i++ ) {
        let allLinesInOne = (code.split(";")).toString();
        let codeStage1 = (allLinesInOne.substring(1, allLinesInOne.length));
        let line = (codeStage1.split(",")[i]).substring(1).trim();
        //if comment skip  over
        if (line.indexOf("??") != -1) {
            continue;
        } else
        
        //new line
        if (line.indexOf("log.ln") != -1) {
            if (line.indexOf("(") != -1 && line.indexOf(")") != -1) {
                let index1 = line.indexOf("(");
                let index2 = line.indexOf(")");
                let numOfTimes = parseInt(line.substring(index1+1, index2));
                for (let i = numOfTimes; i > 0; i--) {
                    console.log();
                }
            } else {
                console.log();
            }
        }else
        
        
        //logging out string
        if (line.indexOf("log.Out.Str") != -1) {
            let index1 = line.indexOf("(");
            let index2 = line.indexOf(")");
            print(line.substring(index1+1, index2));
        }
        
        //loggin out intigets 
        if (line.indexOf("log.Out.Int") != -1) {
            let index1 = line.indexOf("(");
            let index2 = line.indexOf(")");
            print(parseInt(line.substring(index1+1, index2)));
        } else 
        
        //sleep
        if (line.indexOf("log.Sleep") != -1) {
            let index1 = line.indexOf("(");
            let index2 = line.indexOf(")"); 
            let seconds = parseFloat(line.substring(index1+1, index2));
            await sleep(seconds * 1000);
        } else 
        
        //log out varibles
        if (line.indexOf("log.Out.Var") != -1) {
            let index1 = line.indexOf("(");
            let index2 = line.indexOf(")");
            let varName = line.substring(index1+1, index2).trim(); 

            let varValue = lookUpVarName(varName);
            if (varValue !== null) {
                print(varValue);
            } else {
                console.log("ERROR: Variable not found");
            }
        } else 
        
        //log out diffrent opperations
        if (line.indexOf("log.Out.Math") != -1) {
            if (line.indexOf("Plus") != -1) {
                print("+");
            } else 
            if (line.indexOf("Minus") != -1) {
                print("-");
            } else 
            if (line.indexOf("Mult") != -1) {
                print("*");
            } else 
            if (line.indexOf("Eql") != -1){
                print("=");
            } else 
            if (line.indexOf("Div") != -1) {
                print("/");
            } else {
                print("ERROR\nIncorrect log math operator.");
            }
        } else 
        
        //storing the varibles ther type name and data to go along with it.
        if (line.match(/(int|dec|str|clc|prpt) \$\w+ = \(.+\)/)) {
            let parts = line.split(" ");
            let type = parts[0];
            let varName = parts[1].trim();
            let varValue = line.substring(line.indexOf("(") + 1, line.indexOf(")"));

            if (type === "int") {
                varValue = parseInt(varValue);
            } else 
            if (type === "dec") {
                varValue = parseFloat(varValue);
            } else 
            if (type === "str") {
                varValue = varValue.replace(/['"]+/g, '');
            } else 
            if (type === "prpt") {
                varValue = await readLineAsync(varValue); 
            } else 
            if (type === "clc") {
                try {
                    varValue = eval(varValue);
                } catch (e) {
                    console.log("ERROR: Invalid calculation");
                    continue;
                }
            } 

            // Store variable in array with `$` in name
            variables.push(new Variable(varName, type, varValue));
        }
        //here goes the next thing;
    }
}

complier(code);
