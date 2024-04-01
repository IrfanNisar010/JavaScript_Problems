// Question 1: Use reduce to find the total age of all the car owners.

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
  owner: {
    name: 'Alice',
    age: 25
  }
};

const ownerNameAndLength = Object.values(car).map(value => {
    if(typeof value === "object" && value !== null) {
        return {name: value.name, length: value.name.length};
    }
})
console.log(ownerNameAndLength);