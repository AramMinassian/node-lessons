process.nextTick(() => {
  console.log("tick");
});
setImmediate(() => {
  console.log("immediate");
});
setTimeout(() => {
  console.log("timer");
},0);
