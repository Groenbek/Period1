const greeter = function () {
  console.log(this.message);
};

let comp1 = { message: "Hello World" };
let comp2 = { message: "Hi there" };

let g1 = greeter.bind(comp1);
let g2 = greeter.bind(comp2);

g1();
g2();
