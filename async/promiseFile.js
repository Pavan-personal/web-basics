// Promise class is used to handle asynchronous operations in JavaScript. It represents a value which may be available now, or in the future, or never.

// Promise class gives you a promise, that It'll return something in future

const random = () => {};

const p = new Promise(function (
  InnerParameterFunction1,
  InnerParameterFunction2
) {
  //   InnerParameterFunction();
  InnerParameterFunction2();
  //   console.log("Parameter function of promise");
});

// console.log(p); // Promise { <pending> }
let i = 1;
p.then(() => {
  // i = 2;
  // change i to 2
  i = 2;
  //   console.log("here");
  console.log("InnerParameterFunction1 is called");
  // console.log("This needs to be printed finally")
}).catch(() => {
  console.log("InnerParameterFunction2 is called");
});

// console.log(i); // 1

// Promise takes an function as an argumnet, and that function's first argument is a function, which is used to resolve the promise and other is used to reject the promise
