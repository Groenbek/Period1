// Counter using closures
var makeCounter = function () {
  var privCounter = 0;
  function changeBy(val) {
    privCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privCounter;
    },
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.increment();
counter1.increment();

console.log(counter1.value());

counter2.decrement();

console.log(counter2.value());

// closure
var person = function () {
  var age = 0;
  var name = "";
  function changeAge(newAge) {
    age = newAge;
  }
  function changeName(newName) {
    name = newName;
  }
  function info() {
    return name + ", " + age;
  }

  return {
    getInfo: function () {
      return info();
    },
    setAge: function (newAge) {
      changeAge(newAge);
    },
    setName: function (newName) {
      changeName(newName);
    },
  };
};

var p = person();
p.setName("Svaneke");
p.setAge(25);
console.log(p.getInfo());

//Fra undervisning:
function makeFunc() {
  var name = "Eric";

  function logName() {
    console.log(name);
  }
  function changeName(n) {
    name = n;
  }
  return {
    logName,
    changeName,
  };
}

var obj = makeFunc();

obj.logName();
obj.changeName("Hello World!");
obj.logName();
