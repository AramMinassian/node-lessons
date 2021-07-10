process.nextTick(() => {
  console.log("tick");
});
setImmediate(() => {
  console.log("immediate");
});