// -----------------------------------------Prototype inheritance-------------------------------------------------

const deanPrototype = {
  university: "Назва університету",
};


const groupPrototype = {
  name: "",
  dean: Object.create(deanPrototype), 
  students: [],
  enlistStudent(studentName) {
    if (this.students.length < 12) {
      this.students.push(studentName);
      console.log(`${studentName} був зарахований(на) до групи ${this.name}`);
    } else {
      console.log(`Група ${this.name} вже має максимальну кількість студентів (12).`);
    }
  },
};

const faculty = Object.create(groupPrototype);
faculty.name = "Фізико-математичний факультет";

faculty.dean.name = "Федоров  Роман Сергійович";

const groupA = Object.create(groupPrototype);
groupA.name = "Група 242";
groupA.enlistStudent("Іван");
groupA.enlistStudent("Петро")
groupA.enlistStudent("Михайло");
groupA.enlistStudent("Олександр");
groupA.enlistStudent("Андрій");
groupA.enlistStudent("Олена");
groupA.enlistStudent("Ірина");
groupA.enlistStudent("Віктор");
groupA.enlistStudent("Оксана");
groupA.enlistStudent("Василь");
groupA.enlistStudent("Наталія");
groupA.enlistStudent("Ігор"); 

console.log(`Факультет: ${faculty.name}`);
console.log(`Декан факультету: ${faculty.dean.name}`);
console.log(`Список студентів у групі ${groupA.name}: ${groupA.students.join(", ")}`);

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
