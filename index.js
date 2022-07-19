function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
  return 'This one is on me!';
} else if (feet <=2000) {
  return 'That will be twenty bucks.';
} else if (feet >= 2000 && feet <=2500) {
  return 'I will gladly take your thirty bucks.';
} else if (feet > 2500) {
  return 'No can do.'
}
}

function ternaryCheckCity(city){
  return (city === 'NYC'? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'

  }
}



// function findPow(a,b) {
//   let answer = 1;
//   for (let i = b-1; i > -1; i --) {
//     answer = answer * a
//   }
// }
// return answer;

// or for(let i = 1; i <= b; i++) {
//   answer = answer * a
// }