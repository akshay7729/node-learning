const fs = require('fs')
// const book = {
//     title: 'Rich Dad Poor Dad',
//     author: 'Robert M'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)


const testBuffer = fs.readFileSync('1-json.json')
const testJSON = testBuffer.toString();
const testData = JSON.parse(testJSON);
testData['name'] = 'Akshay'
console.log(testData);
fs.writeFileSync('1-json.json',JSON.stringify(testData))