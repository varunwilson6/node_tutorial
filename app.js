const { readFile, writeFile } = require("fs");
const path = require("path");
const sep = path.sep;

readFile(`.${sep}content${sep}first.txt`, "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile(`.${sep}content${sep}second.txt`, "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      `.${sep}content${sep}result-sync.txt`,
      `Here is the result ${first}, ${second} \n`,
      {
        flag: "a",
      },
      (err, result) => {
        if(err) {
          console.log(err);
        }
      }
    );
  });
  console.log(result);
});
