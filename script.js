"use strict";

const name = `John Hoey`;
let age = 34;
const birthday = `August 20`;
const grandRapidsGC = true;
const lifeEvents = [
  `I was born in Troy, Michigan`,
  `I was homeschooled till my Junior year of high school.`,
  `I won a Darth Vader impersonation contest when I was 10 years old.`,
  `I know several people who have graduated from Grand Circus bootcamps and they recommended it to me.`,
];

// grandRapidsGC
//   ? console.log(
//       `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
//     )
//   : console.log(
//       `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
//     );

if (grandRapidsGC) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
