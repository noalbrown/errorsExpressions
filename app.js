const user = { email: 'jdoe@gmail.com' }

try {
  // Produce reference error
  // myFunction()

  // Produce type error
  // null.myFunction()

  // Produce syntax error
  // eval('Hello World')

  // Produce URIError
  // decodeURIComponent('%')

  if (!user.name) {
    // throw 'User has no name'
    throw new SyntaxError('User has no name')
  }
} catch (e) {
  console.log(`User error: ${e.message}`)
  // console.log(e)
  // console.log(e.message)
  // console.log(e.name)
  // console.log(e instanceof ReferenceError)
  // console.log(e instanceof TypeError)
} finally {
  console.log('Finally runs no matter result')
}

console.log('Program Continues')