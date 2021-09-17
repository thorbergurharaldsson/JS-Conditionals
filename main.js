// An array of objects, each object is information about each person
let people = [
  {
    name: "Valina Morston",
    birthday: "1994/4/10",
    Children: 1,
    Country: "Ireland",
    programKnowledge: false,
  },
  {
    name: "Gilberte Mum",
    birthday: "1981/9/20",
    Children: 1,
    Country: "China",
    programKnowledge: false,
  },
  {
    name: "Faustina Slimon",
    birthday: "1979/3/24",
    Children: 1,
    Country: "Cuba",
    programKnowledge: false,
  },
  {
    name: "Dolf Hollingsby",
    birthday: "1975/6/26",
    Children: 1,
    Country: "Philippines",
    programKnowledge: true,
  },
  {
    name: "Orelia Christofides",
    birthday: "1991/6/28",
    Children: 0,
    Country: "Canada",
    programKnowledge: true,
  },
];

// Get the current year to be able to calculate users age
const currentYear = new Date().getFullYear();

// Getting first persons age by getting the birthyear and subtrackting current year
let firstPersonBirthday = people[0].birthday.slice(0, 4); // get first 4 letters of people[i].birthday
let firstPersonAge = currentYear - firstPersonBirthday;

// Getting last persons age by getting the birthyear and subtrackting current year
// Using the at() function to be able to count backwards with a negative integer
let lastPersonBirthday = people.at(-1).birthday.slice(0, 4); // get first 4 letters of people[i].birthday
let lastPersonAge = currentYear - lastPersonBirthday;

// If first person is older then last person
if (firstPersonAge > lastPersonAge) {
  console.log(
    people[0].name +
      " (1st person) is older then " +
      people.at(-1).name +
      " (last person)"
  );
}
// If first person is the same age as last person
else if (firstPersonAge == lastPersonAge) {
  console.log(
    people[0].name +
      " (1st person) is the same age as " +
      people.at(-1).name +
      " (last person)"
  );
}
// if nether return true then the last person is older then the first person
else {
  console.log(
    people[0].name +
      " (1st person) is younger then " +
      people.at(-1).name +
      " (last person)"
  );
}

// checks if 2nd person and 3rd person have the same amount of children
if (people[1].Children == people[2].Children) {
  console.log(
    people[1].name +
      " (2nd person) has the same amount of children as " +
      people[2].name +
      " (3rd person)"
  );
} else {
  console.log(
    people[1].name +
      " (2nd person) does not have the same amount of children as " +
      people[2].name +
      " (3rd person)"
  );
}

// If both 1st and 4th person know programming then Yay!
if (people[0].programKnowledge == true && people[3].programKnowledge == true) {
  console.log("Yay!");
}
// Else Let Me Google That For You
else {
  console.log("LMGTFY");
}

// Checks nationality of the 2nd person and outputs an appropriate greeting
switch (people[1].Country) {
  case "Iceland":
    console.log("Hæ");
    break;
  case "Spain":
    console.log("Hola");
    break;
  case "Korea":
    console.log("여보세요");
    break;

  default:
    console.log("Hello");
    break;
}

// ternary to check if 2nd persons name is longer then 5 letters
let longName =
  people[1].name.length > 5
    ? people[1].name + " is longer then 5 letters"
    : people[1].name + " is 5 or fewer letters";

console.log(longName); // logs the outcome of the ternary
