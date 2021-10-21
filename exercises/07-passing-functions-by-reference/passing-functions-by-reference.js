/*****************************
Passing functions by reference
*****************************/

//results from the consoles

f1 = function (x) {
  console.log(`f1:${x}`);
}

f1('hey');
//f1:hey
//undefinded
f1(37);
//f1(37)
//undefined

f2 = function (y) {
  console.log(`f2:${y}`);
}

function f3(fa, fb) {
  fa('hello');
}
//undefined

f3(f1, f2)
// f1: hello

function f4(fa, fb) {
  return {
    fa: fa,
    fb: fb
  };
}

result = f4(f1, f2);
//{fa: f, fb: f};

result.fa(`hello, world`)
//f1:hello world

result.fb('goodbye earthling')
//f2:goodbye earhling