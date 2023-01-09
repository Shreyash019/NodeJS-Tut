/////////////////////////////////////
////// Buffer Methods Megthods //////

// ///<<< Uninitiated Buffer >>>///
// const uninBuf = new Buffer(10); // Not preffered
// const uninaBuf = Buffer.alloc(20);
// console.log(uninBuf);
// console.log(uninaBuf);

// ///<<< Buffer from Array >>>///
// const arrBuf = new Buffer([1,2,3,4,5]);
// console.log(arrBuf);
// console.log(arrBuf.toJSON())

// ///<<< Buffer from String >>>///
// const strBuf = new Buffer('jhbcshjc');
// console.log(strBuf)
// console.log(strBuf.toString());

////////////////////////////
////// Buffer Methods //////
let metBuf = new Buffer.alloc(30);

///<<< Writing to Buffer >>>///
// bufferName.write(string, offset(startPoint), length(toWrite), encoding);
// this methods return the number of character written to buffer 
// if length is smaller than string/filecontent only the part of the content will be written to buffer
let wrtS = metBuf.write('sjv hsvjs sfjhhs hsd.', 5, 15, 'utf-8');
console.log('Number of octets in which string is written:: '+ wrtS)

///<<< Reading from Buffer >>>///
let rad = metBuf.toString('utf-8', 2,20);
console.log(rad)
