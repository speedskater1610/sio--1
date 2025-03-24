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
