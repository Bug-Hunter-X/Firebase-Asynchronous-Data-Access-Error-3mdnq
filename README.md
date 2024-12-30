# Firebase Asynchronous Data Access Error

This repository demonstrates a common error in Firebase when accessing document snapshot properties before they are fully populated.  The error arises from asynchronous data fetching and trying to read values prematurely.

## Problem
The `bug.js` file shows an example where asynchronous Firebase data retrieval is attempted, and a property of the resulting snapshot is accessed immediately.  Because the data hasn't yet arrived, this results in an error or undefined values.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle this. By using `.then()` to access the data within the promise chain, we guarantee that the data is fully populated before attempting to use it. This prevents errors and ensures reliable application behavior. 

## How to reproduce the bug
1. Clone the repository
2. Install Firebase: `npm install firebase`
3. Configure Firebase with your project details.
4. Run `node bug.js` (observe the error or undefined value)
5. Run `node bugSolution.js` (observe the correct behavior)