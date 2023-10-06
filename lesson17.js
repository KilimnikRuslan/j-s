// --------------------------------------------------------Random Resolve-------------------------------------------------

const randomResolve = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1; 

    setTimeout(() => {
      if (randomNumber % 2 === 0) {
        resolve(`Число ${randomNumber} - парне.`);
      } else {
        reject(`Число ${randomNumber} - непарне.`);
      }
    }, 1000);
  });
};

randomResolve()
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error(error); 
  });

// ---------------------------------------------------------Promise API---------------------------------------------------

const createPromiseArr = (n) => {
  const promises = [];

  for (let i = 0; i < n; i++) {
    promises.push(randomResolve());
  }

  Promise.all(promises)
    .then(() => {
      console.log('🥳 Yasss'); 
    })
    .catch(() => {
      console.log('🫠🫡 ok');
    });
};

createPromiseArr(5);


// ---------------------------------------------------------Async/Await--------------------------------------------------

const randomResolve = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1; 

    setTimeout(() => {
      if (randomNumber % 2 === 0) {
        resolve(`Число ${randomNumber} - парне.`);
      } else {
        reject(`Число ${randomNumber} - непарне.`);
      }
    }, 1000);
  });
};

const printResponse = async (n) => {
  try {
    const response = await randomResolve();
    console.log(response); 
  } catch (error) {
    console.error(error); 
  }
};

printResponse();
 