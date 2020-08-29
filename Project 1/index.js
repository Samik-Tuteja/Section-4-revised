var fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, ques) => {
  if (err) throw err;
  const arr = ques.split("\r\n");
  arr.forEach((val, index) => (arr[index] = eval(val) + "\n"));
  fs.writeFile("./output.txt", arr.toString().replace(/,/g, ""), (err) => {
    if (err) throw err;
    console.log("Ouput file updated!!");
  });
});
