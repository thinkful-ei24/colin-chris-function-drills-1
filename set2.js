function jediNames(firstName, lastName){
  let jedi = `${lastName.slice(0,3)}${firstName.slice(0,2).toLowerCase()}`;
  return jedi;
}
console.log(jediNames('Chris','Rudder')); //should output Rudch

function beyond(num){
  if(num === 0){
    console.log('Staying Home');
  }
  else if(isFinite(num) && num > 0){
    console.log('To infinity');
  } else if(isFinite(num) && num < 0){
    console.log('To negative infinity');
  } else if(!isFinite(num)) {
    console.log("And beyond");
  } else if(typeof num !== 'number') {
    throw new Error("Input must be a number");
  }
}
let beyond0;
try {
  beyond0 = beyond("a")
} catch(err){
  console.log(err.message);
}

beyond(5); //should output 'To infinity'

function decode(str){
  let decoded = [];
  let hold = str.split(" ");
  for(let i = 0; i < hold.length; i++){
    if(hold[i][0] !== 'a'  && hold[i][0] !== 'b' && hold[i][0] !== 'c' && hold[i][0] !== 'd'){
      decoded.push(" ");
    } if(hold[i][0] === 'a'){
      decoded.push(hold[i][1]);
    } if(hold[i][0] === 'b'){
      decoded.push(hold[i][2]);
    } if(hold[i][0] === 'c'){
      decoded.push(hold[i][3]);
    } if(hold[i][0] === 'd'){
      decoded.push(hold[i][4]);
    }
  } console.log(decoded.join(""));
}

decode('craft block argon meter bells brown croon droop'); //should output 'for loop'

function monthCheck(month, leapYear = false){
  if(month === 'February' && leapYear === true){
    result = `${month} has 29 days in it`;
  }
  else if(month === 'February' && leapYear === false){
    result = `${month} has 28 days in it`;
  }
  else {
    switch(month) {
      case 'April':
      case 'June':
      case 'September':
      case 'November':
        result = `${month} has 30 days in it!`; 
        break;

      case 'January':
      case 'March':
      case 'May':
      case 'July':
      case 'August':
      case 'October':
      case 'December':
        result = `${month} has 31 days in it`;
    } 
  }
  console.log(result);
}

monthCheck('February', false); //should output 'February has 28 days
monthCheck('April'); //should output 'April has 30 days in it'


