let simpleCalc =
`
run **Main**() {;
  ?? log.Out.Int << (5);
  ?? log.Sleep(.5);

  ?? log.Out.Math.Plus;
  ?? log.Sleep(.5);
      
  ?? log.Out.Int << (3);
  ?? log.Sleep(.5);

  ?? log.Out.Math.Eql;
  ?? log.Sleep(.5);

  ?? make the answer varible and save it to clc to calculate it;
  ?? clc $ans = (5+3);
  ?? log.Out.Var << ($ans); log.ln;

  ??make the name varible;
  
  prpt $name = (what is your name?);
  ??log.Sleep(1);
  ??log.Out.Str(my name is );
  ??log.Out.Var << ($name);
};`;

let getNameThenSayHello = `
run **Main**() {;
    ??prompt user fort here name;
    prpt $name = (what is your name? );
    log.ln;
    
    ??wait then say hello;
    log.Sleep(.5);
    log.Out.Str(well hello);
    log.Out.Var($name);
    log.ln
};`


let bunchOfThingsSioM1CanDo1 = 
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
let bunchOfThingsSioM1CanDo2 = `
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
