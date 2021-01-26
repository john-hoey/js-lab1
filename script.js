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

let hours = 60;
let wage = 10;
let averageTakeHomeAfterTaxesUS = 0.76;
let totalPreTaxPaycheck = wage * hours;

let totalPostTaxPaycheck = totalPreTaxPaycheck * averageTakeHomeAfterTaxesUS;
let overtimeHours = hours - 40;
let overtimeWage = wage * 1.5;

if (hours <= 40) {
  console.log(`${wage} wage`);
  console.log(`${hours} hours`);
  console.log(`${totalPreTaxPaycheck} total pretax paycheck`);
  console.log(`${totalPostTaxPaycheck} total posttax paycheck`);
  console.log(
    `Working ${hours} hours at a wage of ${wage} dollars an hour earned you a total of ${totalPreTaxPaycheck} before taxes. With an average US tax rate of 24% for a single payer household, your estimated take home after taxes is ${totalPostTaxPaycheck}.`
  );
} else {
  console.log(`${wage} wage`);
  console.log(`${hours} hours`);
  console.log(`${overtimeWage} overtime wage`);
  console.log(`${overtimeHours} overtime hours`);
  let totalPreTaxPaycheck =
    (hours - overtimeHours) * wage + overtimeHours * overtimeWage;
  let totalPostTaxPaycheck = totalPreTaxPaycheck * 0.76;
  console.log(`${totalPreTaxPaycheck} total pretax paycheck`);
  console.log(`${totalPostTaxPaycheck} total posttax paycheck`);
  console.log(
    `${averageTakeHomeAfterTaxesUS} average take home % of paycheck in the United states`
  );
  console.log(
    `Working ${hours} hours at a wage of ${wage} dollars an hour for the first 40 hours and ${overtimeWage} dollars an hour for the ${overtimeHours} hours of overtime you worked earned you a total of ${totalPreTaxPaycheck} before taxes. With an average US tax rate of 24% for a single payer household, your estimated take home after taxes is ${totalPostTaxPaycheck}.`
  );
  let weeksTillMillionare = Math.round(1000000 / totalPostTaxPaycheck);
  console.log(
    `If you made this same amount every week you would be a millionare in ${weeksTillMillionare} weeks.`
  );
}
