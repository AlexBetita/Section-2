# M1W6D1

## Assessment(1 hour 15 min)

## Readings(20 min)

## Node/Readline (20 min)

### Node Runtime Environment

- Node is a runtime for JavaScript that runs on servers/computers with
**full user-level system access**.

- This is in contrast to javascript in the browser which is sandboxed for
  security reasons(so webpages cannot do anything malicious on your system).

- This allows us to write software that runs natively on your computer such as a
  desktop app or server for a web app. Utilities such as readline which interact
  with the file system can only be utilized in node, not the browser.

### Callbacks and the Event Loop

- Callbacks allow us to write asynchronous code freeing up the main threads
  call stack to perform other tasks as we are waiting for some sort of input.

- In our below code we are using callbacks to pass a function to be executed once
we have user input. While we are waiting for user input the main thread of
execution is freed up to perform other tasks.

```js
// import the readline module into our file
const readline = require('readline')

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const answers = {}

// ask the user a question
// Main thread is freed up while we wait for user input. HandleResponeOne will
// be executed when the user has submitted their response.

rl.question("What's up, doc? ", handleResponseOne)

// first calback
function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + ' is up.')
  // save firstAnswer to answer object
  answers['up'] = firstAnswer
  rl.question("What's down, clown? ", handleResponseTwo)
}

// second callback (passed to `rl.question()` in handleResponseOne)
function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + ' is down.')
  answers['down'] = secondAnswer
  rl.question("What's left, Jeff? ", handleResponseThree)
}

// third callback (passed to `rl.question()` in handleResponseTwo)
function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + ' is left.')
  answers['left'] = thirdAnswer
  // close the interface
  rl.close()
  console.log(answers)
}
```

## Kahoot! (30 min)

Material will be from mod
