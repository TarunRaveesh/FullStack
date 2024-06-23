/* In JavaScript, functions are first-class objects, meaning they can be stored in variables, 
passed as arguments to other functions, returned from other functions, and stored in arrays or objects. */

var users = {
    name: "Tarun",
    age: 20,
    city: "Delhi",
    isLikable: function () {
        return true;
    }
};

console.log(users.isLikable());

/* Promises, on the other hand, are objects that represent the eventual completion (or failure) of an
asynchronous operation and its resulting value. They are created using the new Promise() constructor and
can be in one of three states: pending, fulfilled, or rejected. A promise is settled if it is not pending,
meaning it is either fulfilled or rejected. The then() method takes up to two arguments: callback functions
for the success and failure cases of the Promise. The catch() method returns a Promise and deals with rejected
cases only, while the finally() method returns a Promise that executes a specified callback function when the
promise is settled, regardless of its outcome. The Promise.all() method takes an iterable of promises as input
and returns a single Promise that resolves when all of the promises have resolved. Conversely, the Promise.allSettled()
method returns a promise that resolves after all of the given promises have either resolved or rejected, with an array
of objects describing the outcome of each promise. */

// Which is better: callbacks or promises?
// Promises are generally considered better than callbacks for handling asynchronous operations in JavaScript.
// Here are some reasons why promises are preferred over callbacks:
// Promises provide a cleaner and more readable syntax for handling asynchronous operations.
// Promises can be chained together, making it easier to handle multiple asynchronous operations sequentially.
// Promises allow for better error handling through the use of the catch() method.
// Promises can be used with async/await, which provides a more synchronous way of writing asynchronous code.
// Promises are built into JavaScript and are widely supported by modern browsers and Node.js.
// However, callbacks are still widely used in JavaScript, especially in older codebases and libraries.
// In some cases, callbacks may be more appropriate for handling certain types of asynchronous operations, such as event listeners or low-level I/O operations.
// Ultimately, the choice between callbacks and promises depends on the specific use case and personal preference.