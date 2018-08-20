console.log("Hi, my name is Colin and I'm 30 years old");


function createGreeting(name, age) {     
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }  //closes if statement 
  if (typeof age !== 'number') {
    throw new Error("Age must be numeric"); 
  }
  if ((typeof name !== 'string')|| (name.length<3)) {
    throw new Error("Name must only contain letters (A-Z) and be at least 3 letters long")
  }
  const yob = getYearOfBirth(age);
  return `Hi, I'm ${name} and I'm ${age} years old.  I was born in ${yob}`;
}  // closes function createGreeting()

//let greeting0;

try {
  createGreeting(35, 2)
} catch (err) {
  console.log(err.message);
}

try {
  createGreeting('Capi', -64)  
} catch (err) {
  greeting0 = 'error';
  console.log(err.message);
}

try {
  createGreeting(35, 'Capi')
} catch (err) {
  console.log(err.message);
}

console.log(greeting0);

function getYearOfBirth(age) {   
  let yearOfBirth = 2018 - age;
  return yearOfBirth;
}

const greeting1 = createGreeting('Colin', 30);
console.log(greeting1);
