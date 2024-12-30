The solution involves utilizing Promises and the `.then()` method to ensure that the data is fully loaded before attempting to access properties:

```javascript
// bugSolution.js
db.collection('yourCollection').doc('yourDocument').get()
  .then((doc) => {
    if (doc.exists) {
      console.log('Document data:', doc.data().yourProperty);
    } else {
      console.log('No such document!');
    }
  })
  .catch((error) => {
    console.error('Error getting document:', error);
  });
```