/*
    Module in node js is a separate js file that can be imported and used in another file.

    we can create custom modules and there are in built modules , third party modules .

    In built modules 
      filesystem fs
      os 
     path , http  , url etc 

     run node application node jsfilename

*/
// import module
let fs = require("fs"); // using filesytem module

// sync mode
let fileName = "Myfile.txt";
let path = "E:\\nodejsworkspace-2026\\filesystemdemo\\res\\"; // if \ slash is there replace with \\ or use  single forward slash /
// writeFileSync()  writing mode
// if file not exists it will create the file and write the data
// if file already exists it will be open the file and overwrites the data  - old data will be replace with new data
let data = "Node Js is runtime env for js ";
let newData =
  "By using node js we can run js on server side and create web app";
//fs.writeFileSync(path + fileName, data);
fs.writeFileSync(path + fileName, newData);

// append it will write the data in already existing file it  will add new data at end of old data
// if file not exists it will create file and write the data
let appendData = "\t \n By using node js we can create cli application also. ";
fs.appendFileSync(path + fileName, appendData);
let newFileName = "MyFile2.txt";
fs.appendFileSync(newFileName, appendData); // it will create file in current working directorty/folder

// read data from the file
// bufferdata is data type it hold binary data
// readFile will read the data of file if exists , if not exists it will raise
let buffData = fs.readFileSync(path + fileName);
console.log(buffData);
// conver buffer data into string
console.log(buffData.toString());

console.log("-----------------------------------------------");
let fileData = fs.readFileSync(path + fileName, "utf-8");
console.log(fileData);

let oldFileName = "MyFile.txt";
let newFileName1 = "FileSystemDemo.txt";

fs.renameSync(path + oldFileName, path + newFileName1); // rename the file

// delete file
let fileName3 = "MyFile2.txt";
fs.unlinkSync(fileName3);
