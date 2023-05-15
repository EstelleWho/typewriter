// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   process.stdout.write(char);
// }

// setTimeout(() => {
//   // print the char here
//   const sentence = "hello there from lighthouse labs";
//   for (const char of sentence) {
//     process.stdout.write(char);
//   }
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.


// this will delay each letter by 50ms so that the message appears as if it's being typed
setTimeout(() => {
  const sentence = "hello there from lighthouse labs";
  let delay = 0;

  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
}, 1000);