// const user = { email: 'jdoe@gmail.com' }

// try {
//   // Produce reference error
//   // myFunction()

//   // Produce type error
//   // null.myFunction()

//   // Produce syntax error
//   // eval('Hello World')

//   // Produce URIError
//   // decodeURIComponent('%')

//   if (!user.name) {
//     // throw 'User has no name'
//     throw new SyntaxError('User has no name')
//   }
// } catch (e) {
//   console.log(`User error: ${e.message}`)
// console.log(e)
// console.log(e.message)
// console.log(e.name)
// console.log(e instanceof ReferenceError)
// console.log(e instanceof TypeError)
// } finally {
//   console.log('Finally runs no matter result')
// }

// console.log('Program Continues')


// EXPRESSIONS
// let re;

// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // g = finds all, not just one

// console.log(re)
// console.log(re.source)

// exec() will return result in an array or null
// const result = re.exec('oh hello world')

// console.log(result)
// console.log(result[0])
// console.log(result.index)
// console.log(result.input)

// test() returns true or false
// const result = re.test('Hello')
// console.log(result)

// match() will return result array or null
// const str = 'Hello There';
// const result = str.match(re)

// console.log(result)

// search() will return the index of the first match or -1
// const str = 'Hello There';
// const result = str.search(re)

// console.log(result)

// replace() will return a new string with some or all matches of a pattern
// const str = 'Hello There'
// const newStr = str.replace(re, 'Hi')

// console.log(newStr)

let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Meta character symbols
re = /^h/i //Means must start with
re = /d$/i //Means must end with
re = /^hello world$/i //Means must begin and end with
re = /^h.llo/i //Means matches any ONE character
re = /h*llo/i //Means matches any character 0 or more times
re = /gre?a?y/i //Optional character match
re = /gre?a?y\?/i //Escape character

// String to match
// const str = 'Hello World';
const str = 'Gray?';

// Log Results
const result = re.exec(str)
console.log(result)

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`)
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

reTest(re, str)