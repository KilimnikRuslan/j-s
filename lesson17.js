// ----------------------------------------------------------Delayed loop-------------------------------------------------

const delayedLoop = async () => {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
  }
};

delayedLoop();


// ------------------------------------------------------------Random-------------------------------------------

const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    if (randomNumber >= -76) {
      resolve("Promise resolved");
    } else {
      reject(new Error("Promise rejected"));
    }
  });
};

randomPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); 
  });


  // -----------------------------------------------Timeout-----------------------------------------------------
  // --------------setTimeout 

  const printNumber = (number) => {
    if (number <= 5) {
      console.log(number);
      number++;
      setTimeout(() => {
        printNumber(number);
      }, 1000);
    }
  };
  
  printNumber(1);

// -----------------------------setInterval

  let number = 1;

const printNumber = () => {
  console.log(number);
  number++;

  if (number > 5) {
    clearInterval(interval); 
  }
};

const interval = setInterval(printNumber, 1000); 

printNumber();

// -------------------------------------------------------------Server------------------------------------------------

const users = [
  {
    id: 1,
    name: "Тарас",
    age: 30,
    movies: [],
  },
  {
    id: 2,
    name: "Катя",
    age: 45,
    movies: ["Титанік", "Аватар"],
  },
  {
    id: 3,
    name: "Іван",
    age: 28,
    movies: ["Матриця", "Початок"],
  },
  {
    id: 4,
    name: "Аліса",
    age: 35,
    movies: ["Гаррі Поттер", "Володар Перснів"],
  },
  {
    id: 5,
    name: "Олег",
    age: 22,
    movies: ["Людина-павук", "Залізна людина"],
  },
];

const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);

      if (user) {
        resolve(user);
      } else {
        reject(new Error("404 not found"));
      }
    }, 1000); 
  });
};

getUserData(2)
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.error(error.message); 
  });