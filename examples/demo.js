/**
 * A more complex example that shows the current progress
 */


/**************** General harmony features ******************/
const foo = () => 'Hello';
const twice = x => 2 * x;

const mul = function({init}, ...more) {
  return more.reduce(
    (product, n) => product * n,
    init
  );
};


/**************** console.log ******************/
console.log(mul({init: 2}, 3, twice(2))); // 2 * 3 * 4 = 24


/**************** setTimeout ******************/
setTimeout(function() {
  const nowISO = (new Date()).toISOString();
  console.log("It is currently: " + nowISO);
  setTimeout(() => console.log('ok'), 100);
}, 10);


/**************** setInterval ******************/
let counter = 0;
const interval = setInterval(function() {
  console.log('Interval #' + (++counter));
  if (counter >= 5) {
    /**
     * @todo Currently fails, details:
     *
     * Assertion failed: (!(handle->flags & (UV_CLOSING | UV_CLOSED))), function uv_close, file ../src/unix/core.c, line 91.
     */
    clearInterval(interval);
  }
}, 50);
