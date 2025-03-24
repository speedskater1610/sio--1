let code = 
`run **Main**() {;
    log.Out.Str(hello world);
    log.ln;
    log.ln;
    
    log.Sleep(1);
    
    str $fullName = (si0 -1);
    
    ??this is a comment it doent get run and is indicated by the 2$'s;
    log.Out.Str(I am );
    log.Sleep(0.25);
    log.Out.Var($fullName);
    
    log.ln(4);
    prpt $userName = (what is your name? );
    ??sleep for a 1/4 sec before saying hello;
    log.Sleep(0.5);
    
    ??say hello and then the name the user entered;
    log.Out.Str(well hello then );
    log.Out.Var($userName);
    
    log.ln(5);
    log.Out.Str(I can do a bunch of things including ); log.ln;
    log.Out.Str(\t• saving variables); log.ln;
    log.Out.Str(\t• math); log.ln;
    log.Out.Str(\t• prompting);
    
    
};`;
let code1 = `
run **Main**() {;
    ??simple logging;
    log.Out.Str(hello world);
    log.ln(5);
    log.Out.Str(hello world);
    log.ln(5);
    
    ??str vars;
    str $name = (john);
    log.Out.Var($name);
    log.ln;
    
    ??math vars;
    clc $problem = (5+3);
    log.Out.Var($problem);
    log.ln(5);
    
    ??math symblols;
    prpt $num1 = (Enter a num: );
    log.Out.Math.Plus;
    prpt $num2 = (Enter another num: );
    ??calculate the 2  nums together;
    clc $sumNum1Num2 = ($num1 + $num2);
    log.Out.Var($sumNum1Num2);
};

`

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

complier(code1);

//prpt $name = (what is your name? );
