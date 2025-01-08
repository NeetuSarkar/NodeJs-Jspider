const fs = require("fs");

// fs.readFile("example.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file: ", err);
//   } else {
//     console.log("file data: ", data);
//   }
// });

// function readFile() {
//   try {
//     const data = fs.readFileSync("examps.txt", "utf-8");
//     console.log("File data: ", data);
//   } catch (err) {
//     console.error("Error reading file : ", err);
//   }
// }

// readFile();

// fs.writeFile("output.txt", "Hello, World!", "utf-8", (err) => {
//   if (err) {
//     console.error("Error writting to file: ", err);
//   } else {
//     console.log("File written successfully");
//   }
// });

// fs.writeFileSync("output.txt", "Namaste NodeJs", "utf-8");
// console.log("file written successfully");

// fs.appendFile("output.txt", "\nAppended text.", "utf-8", (err) => {
//   if (err) {
//     console.log("Error appending to file: ", err);
//   } else {
//     console.log("Text appeneded successfully!");
//   }
// });

// fs.appendFileSync("outpu.txt", "\nAppened text.", "utf-8");
// console.log("Text appended successfully!");

// fs.unlink("outpu.txt", (err) => {
//   if (err) {
//     console.error("Error deleting file:", err);
//   } else {
//     console.log("File delete Successfully");
//   }
// });

fs.rename("ou.txt", "out.txt", (err) => {
  if (err) {
    console.error("Error renaming file:", err);
  } else {
    console.log("File renamed successfully!");
  }
});
