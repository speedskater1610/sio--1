# sio-1  documentation
# how it compiles
the code it seperated from line to line by using a for loop based off of the amount of ;'s and then seperated each line by ";" to ";".
then it used the js methods ".indexOf()" and ".substring()".

 - ".indexOf(string looking for)" returns a index in that string, for example
    - "a p p l e" | "Hello, World"
    -  0 1 2 3 4  |  0123456789 10 11
    -  returns -1 if the value put in doesnt exist

 -  ".substring(index1, index2)" returns a string based off of what is inbetween those 2 indexes
    - let name = "johnny";
    - let nickName = name.substring(0, 4);
    - console.log(nickName);
    - //this will return "john in the console"

  then it check is something is on that line using an if statement with the condition of "(line.indexOf("thing you are  searching for") != -1)"



  
