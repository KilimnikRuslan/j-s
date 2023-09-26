// -----------------------------------------Prototype inheritance-------------------------------------------------

const university = {
  universityName: "Polytechnic",
  dean: "Ivan Petrov",
};

const faculty = Object.create(university);
faculty.facultyName = "Computer Science";
faculty.groups = [[]]; 
let currentGroupIndex = 0;

faculty.enlistStudent = function(studentName) {
  
  const currentGroup = this.groups[currentGroupIndex];

  if (currentGroup.length < 12) {
    currentGroup.push(studentName);
  } else {
    
    this.groups.push([studentName]);
    currentGroupIndex++;
  }
};
faculty.enlistStudent("Taras");
faculty.enlistStudent("Igor");
faculty.enlistStudent("Julia");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Igor");
faculty.enlistStudent("Julia");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Igor");
faculty.enlistStudent("Julia");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Igor");
faculty.enlistStudent("Julia");
faculty.enlistStudent("Taras");
faculty.enlistStudent("Igor");
faculty.enlistStudent("Julia");


console.log(faculty.universityName); 


faculty.groups.forEach((group, index) => {
  console.log(`Група ${index + 1}: ${group}`);
});

// ---------------------------------------------------------Prototype constructor--------------------------------------

function Animal(name) {
  this.name = name;
}

Animal.prototype.getInfo = function() {
  return `Це ${this.name}`;
};

function Mammal(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Mammal.prototype = Object.create(Animal.prototype);

Mammal.prototype.bark = function() {
  return 'Лабрадори відомі своєю інтелігентністю та різнобічною обдарованістю. Завдяки надзвичайно гострому чуттю і пристрасті до апортировки лабрадори використовуються як службові собаки.';
};

function Bird(name, habitat) {
  Animal.call(this, name);
  this.habitat = habitat;
}

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.fly = function() {
  return ' Пінгвіни є досить відокремленою групою птахів, що має давнє походження. Ряд налічує 6 родів і 16 видів, які утворюють одну родину';
};

Bird.prototype.swim = function() {
  return 'клас теплокровних яйцекладних вищих хребетних тварин, які пересуваються на двох кінцівках, ';
};

const dog = new Mammal('Собака', 'Лабрадор');
console.log(dog.getInfo());
console.log(dog.bark()); 
console.log(`Порода: ${dog.breed}`); 
console.log('---');

const penguin = new Bird('Пінгвін', 'Полярні регіони');
console.log(penguin.getInfo()); 
console.log(penguin.fly()); 
console.log(penguin.swim()); 

penguin.fly = function() {
  return 'не можу летіти';
};

console.log(penguin.fly()); 
