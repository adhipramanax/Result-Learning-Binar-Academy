// worker
async function loop() {
  const indexValue = [];
  for (let i = 0; i < 100000; i++) {
    indexValue.push(i);
  }
  return indexValue;
}

// worker
let res = loop().then((data) => {
  console.log("Async");
  console.log(data);
});

// main thread
console.log("Sync");
