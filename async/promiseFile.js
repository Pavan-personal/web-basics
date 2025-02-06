// Promise class is used to handle asynchronous operations in JavaScript. It represents a value which may be available now, or in the future, or never.

// Promise class gives you a promise, that It'll return something in future

const random = () => {};

const p = new Promise(function (InnerParameterFunction) {
//   InnerParameterFunction();
//   console.log("Parameter function of promise");
});

// console.log(p); // Promise { <pending> }
let i = 1;
p.then(() => {
    // i = 2;
    // change i to 2
    i = 2;
    console.log("here")
    // console.log("This needs to be printed finally")
})

console.log(i); // 1


