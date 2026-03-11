# ACS 3310 — Lab 1: Getting Started with TypeScript

## Overview

In this lab you will:

* set up a small TypeScript project
* compile TypeScript to JavaScript
* write a few simple typed functions
* run automated tests to verify your work

This lab is designed to help you become comfortable with the basic workflow used throughout this course.

---

# Learning Goals

By completing this lab you should be able to:

* install dependencies with npm
* compile TypeScript using `tsc`
* run automated tests
* write simple TypeScript functions

---

# Your Task

You will implement several functions in:

```
src/challenges.ts
```

The automated tests in the `tests` folder will verify that your functions work correctly.

Do **not modify the test files**.

---

# Project Structure

```
src/
  challenges.ts   ← you will write your code here

 tests/
  challenges.test.ts   ← automated tests

package.json
tsconfig.json
vitest.config.ts
```

You should only need to edit:

```
src/challenges.ts
```

---

# Setup Instructions

Clone your assignment repository:

```bash
git clone <your-repo-url>
cd ACS-3310-Lab-1
```

Install dependencies:

```bash
npm install
```

---

# Running the Tests

Run the tests with:

```bash
npm test
```

You should see output from **Vitest** showing which tests pass or fail.

As you implement the functions, more tests will pass.

---

# Running the TypeScript Compiler

Compile the project with:

```bash
npm run build
```

This runs the TypeScript compiler and generates JavaScript files in the `dist` folder.

---

# Functions to Implement

Implement the following functions in `src/challenges.ts`:

### `add(a, b)`

Returns the sum of two numbers.

Example:

```
add(2, 3) → 5
```

---

### `isEven(n)`

Returns `true` if a number is even.

Examples:

```
isEven(4) → true
isEven(5) → false
```

---

### `first(array)`

Returns the first element of an array.

This function should use a **generic type** so it works with any type of array.

Examples:

```
first([1,2,3]) → 1
first(['a','b','c']) → 'a'
```

---

### `makeUser(name, age)`

Returns an object containing the provided name and age.

Example:

```
makeUser('Ana', 22)
→ { name: 'Ana', age: 22 }
```

---

### `printLength(text)`

Returns the length of a string.

Example:

```
printLength('hello') → 5
```

---

# Workflow

A typical workflow for this lab is:

1. Run the tests
2. Implement one function
3. Run the tests again
4. Commit your changes
5. Push to GitHub

Example:

```bash
git add .
git commit -m "implement add function"
git push
```

Every push will trigger automated grading in GitHub Classroom.

---

# Submission

Your work is submitted automatically when you push your code to GitHub.

Make sure:

* all tests pass
* your code is pushed to your assignment repository

---

# Tips

If tests fail:

* read the error message carefully
* check the expected output in the test file
* verify your TypeScript types

Start with the easiest function (`add`) and work your way down.

---

# Stretch Goal

Add type annotations to this function and make it work correctly:

```ts
function doubleAll(values) {
  return values.map(v => v * 2)
}
```

---

Good luck and have fun learning TypeScript!
