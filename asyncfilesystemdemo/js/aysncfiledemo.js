// import modue
const { log } = require("console");
let fs = require("fs");
let fileName = "AsyncFile.txt";
let path = "E:\\nodejsworkspace-2026\\asyncfilesystemdemo\\res\\";
let data =
  " Callback Function  is a function that is passed as an argument inside another function  ";
/*
  When file is a filename, 
  asynchronously writes data to the file, 
  replacing the file if it already exists. data can be a string or a buffer.
  if file already exists write will overwrite the data.
*/

// writeFile(filename, data  to write,callback ())

fs.writeFile(path + fileName, data, function (err) {
  if (err) throw err;
  console.log("Data is saved in the file");
});

console.log("--------------------");
// add new Data in the existing file
let newData = "\n Callback function run after another function is finished.";
fs.appendFile(path + fileName, newData, (err) => {
  if (err) throw err;
  console.log("New Data is added at the end of the file.");
});

// read  data from the File
fs.readFile(path + fileName, (err, data) => {
  if (err) throw err;
  console.log(data); // data will be in buffer format
  console.log(data.toString());
});

fs.readFile(path + fileName, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(
    "-------------reading data from file aysnc way------------------",
  );
  console.log(data);
});

console.log("***************************************************");

fs.stat(path + fileName, (err, statsData) => {
  if (err) throw err;
  else {
    // console.log(statsData);
    console.log(`${path + fileName} is a directory ${statsData.isDirectory()}`);
    console.log(`${path + fileName} is a file ${statsData.isFile()}`);
  }
});

// // rename the file
// let newName = "MyTemp.js";
// fs.rename(path + fileName, path + newName, (err) => {
//   if (err) throw err;
//   console.log("file is renamed");
// });

// // delete file
// fs.unlink(path + newName, (err) => {
//   if (err) throw err;
//   console.log("file is deleted");
// });

let dirPath = "E:\\expressdemo\\";
// reading a directory or folder
fs.readdir(dirPath, (err, files) => {
  if (err) throw err;
  console.log(
    "------------getting all text files from the directory------------------",
  );
  files.forEach((file) => {
    if (file.endsWith(".txt")) {
      console.log(file);
    }
  });
});

// Practice 1
//  create a folder name as mydata
//  create a file name as info.txt in mydata folder and write the data into
//   Add more data into the file
//  read the data from the file
//  rename the file into myinfo.txt
//  delete both file and folder
