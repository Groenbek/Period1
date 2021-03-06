function hoisting() {
  f1();
  f2();

  function f1() {
    console.log("I'm f1");
  }

  var f2 = function () {
    console.log("Yes, but I'm f2");
  };
}

hoisting();

// Running this code will return an error,
//f2 is lifted but not the function, only the declarationh

//f1 will be hoisted to the beginning of the function, which means it will run.
