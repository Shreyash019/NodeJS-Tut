const fs = require('fs')
////////////////////////////////////
////// File System in Node.js //////



///<<< Synchronous file system >>>///

/* File Read method */
// fs.readFileSync(file, [options]);
const syncRead = fs.readFileSync('./TestFiles/openFile.txt', {encoding:'utf8', flag:'r'});
console.log(syncRead);



/* File write method */
// fs.writeFileSync(file, data, [options])
const strtoWrite = 'This is a fs write method.'
const syncWrite = fs.writeFileSync('./TestFiles/writeFileSync.txt', strtoWrite);
console.log('writeFileSYnc():: ', syncWrite);  // print undefined



// /* File Append method */
// fs.appendFileSync(file, data, [options])
const strtoAppendSync = ' Now this is string appended using append method.'
const syncAppend = fs.appendFileSync('./TestFiles/writeFileSync.txt', strtoAppendSync);
console.log('appendFileSync():: ', syncAppend)  // print undefined



// /* File Copy method */
// fs.copyFileSync(source, destination, [options])
const syncCopy = fs.copyFileSync('./TestFiles/writeFileSync.txt', './TestFiles/copyFileSync.txt');
console.log('copyFileSync():: ', syncCopy)  // print undefined



/* File Delete method */
// fs.unlinkSync(file)
// const syncDelete = fs.unlinkSync('./TestFiles/syncDel.txt');
// console.log(syncDelete)   // print undefined




///<<< Asynchronous file system >>>///

/* File Read method */
// fs.readFile(file, options, callback)
const asyncRead = fs.readFile('./TestFiles/openFile.txt', (err, data)=>{
    if(err) console.log(err);
    else console.log(data)
});
console.log('readFile():: ', asyncRead)  // print undefined



/* File write method */
// fs.writeFile(file, data, options, callback)
const strAsyncWrite = 'This is a asynchronous file write.'
const asyncWrite = fs.writeFile('./TestFiles/asyncWriteFile.txt', strAsyncWrite, (err)=>{
    if(err) console.log(err);
});
console.log('writeFile():: ', asyncWrite)  // print undefined



// /* File append method */
// fs.appendFileSync(file, data, [options] callback)
const strtoAppendAsync = ' Now this is a asynchronous file append.'
const asyncAppend = fs.appendFile('./TestFiles/asyncWriteFile.txt', strtoAppendAsync, (err)=>{
    if(err) console.log(err);
});
console.log('appendFile():: ', asyncAppend)  // print undefined


/* File copy method */
// fs.copyFile(source, destination, [options], callback)
const asyncCopy = fs.copyFile('./TestFiles/asyncWriteFile.txt', './TestFiles/copyFileAsync.txt', (err)=>{
    if(err) console.log(err)
});
console.log('copyFile():: ', asyncCopy)  // print undefined



/* File Delete method */
// fs.unlink(file, callback)
// const asyncDelete = fs.unlink('./TestFiles/asyncDel.txt', (err)=>{
//     if(err) console.log(err)
// })
// console.log(asyncDelete)  // print undefined