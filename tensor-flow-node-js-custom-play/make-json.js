const fs = require("fs");

const values = new Array(1000)
  .fill(null)
  .map((_, index) => index + 1)
  .map((num) => ({
    number: num,
    state: num % 2 === 0 ? 0 : 1,
  }));
// .filter(() => Math.random() > 0.5);

fs.writeFileSync("data.json", JSON.stringify(values, null, 2));
