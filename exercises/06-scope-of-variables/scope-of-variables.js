/*****************
Scope of variables
*****************/


const x = 99;

function f1() {
  let y = 11;

  function f2(x) {
    x = x + 1;
    let y = 33;
    console.log(x);
    console.log(y);
  }
  console.log(x);
  console.log(y);
  f2(x);
}


/*
Results from the console:
>f1();
 99   (line 12)
 11   (line 13)
 100  (line 9)
 33   (line 10)
*/