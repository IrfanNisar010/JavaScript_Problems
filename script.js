// --------- Shallow copy -------

// const { json } = require("body-parser");
// const { response } = require("express");

// const { name } = require("ejs");


// const originalObject = {
//   a: 1,
//   b: {
//     c: 2
//   }
// };

// const shallowCopy = {...originalObject};

// shallowCopy.a = 2;
// shallowCopy.b.c = 4;

// console.log(originalObject);
// console.log(shallowCopy);

// --------- Deep copy -------

// const originalObject = {
//   a: 1,
//   b: {
//     c: 2
//   }
// };

// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// deepCopy.a = 2;
// deepCopy.b.c = 4;

// console.log(originalObject);
// console.log(deepCopy);

// filter method practice

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);

// Filtering an array of objects based on a condition:

// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 300 },
//   { name: 'Headphones', price: 100 }
// ];

// const affordableProduct = products.filter(product => product.price <= 500)

// console.log(affordableProduct);


// const strings = ['apple', 'banana', 'orange', 'kiwi', 'grape'];

// const stringWithoutA = strings.filter(str => !str.includes('a'));

// console.log(stringWithoutA);


// const numbers = [50, 120, 80, 200, 30];

// const greaterNumber = numbers.filter(num => num > 100)

// console.log(greaterNumber);

// currying Practice

// function calculateArea(width) {
//     return function(height){
//         return width * height
//     }
// }

// const areaOfRectangle = calculateArea(7);

// console.log(areaOfRectangle(10));
// console.log(areaOfRectangle(4));

// function createPerson(firstName) {
//     return function(LastName){
//         return {firstName , LastName};
//     }
// }

// const createPersonJohn = createPerson("John")

// const person1 = createPersonJohn("Dhoe");

// console.log(person1);

// function a(str) {
//     for(let i = 0, j = str.length - 1; i <= j; i++ , j--) {
//         if(str[i] !== str[j]) {
//             return console.log("Not a palindrome");
//         } else {
//             return console.log("Palindrome");
//         }
//     }
// }

// a("MOsdf")


// const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

// const fruitCount = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});

// console.log(fruitCount);

// const  helloWorld = "Hello, World";

// const reversed = helloWorld.split(' ').reverse();

// console.log(reversed);

// const http = require("http");

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200,{ 'Content-Type' : 'text/plain'});
//     res.end("Hey it's me");
// })

// server.listen(port, () => {
//     console.log(`Listening Port http://localhost:${port}/`);
// })


// function* numberGenerator(start, end) {
//     for (let i = 0; i <= end; i++ ) {
//         yield i;
//     }
// }

// const iterator = numberGenerator(1, 5);

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// const arr = [1,3,5, 12,4,6,10];

// const newArray = []

// for(let i = 0; i < arr.length; i++){
//     const doubledElement = arr[i] * 2;
//     newArray.push(doubledElement);
// }

// let max = -Infinity;
// let secMax = -Infinity;

// for (let i = 0; i <= newArray.length; i++) {
//     if(newArray[i] > max) {
//         secMax = max;
//         max = newArray[i]
//     } else if (newArray[i] > secMax || newArray == max) {
//         secMax = newArray[i];
//     }
// }

// console.log("Doubled Array: " ,newArray);
// console.log("Maximum num: " ,max);
// console.log("Second Maximum num: " ,secMax);

// const originalObject = {
//     a:1,
//     b:{
//         c:2
//     }
// }

// const deepCopy = JSON.parse(JSON.stringify(originalObject));      

// deepCopy.a = 4;
// deepCopy.b.c =5;

// console.log(originalObject);
// console.log(deepCopy);

// const numbers = [3,1,5,3,6,1,6,2,6];

// const uniqueElements = [...new Set(numbers) ]

// console.log(uniqueElements);


// Closure example

// function parentFunction(){
//     const outerValue = "This a parent function values"

//     return function innerFunction(){
//         console.log(outerValue);
//     }
// }

// const myInnerFunction = parentFunction()

// myInnerFunction();

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const removeMultiple = array.filter(num => num % 3 !== 0);

// console.log(removeMultiple);

// const cars = [
//     { brand: 'Toyota', price: 15000 },
//     { brand: 'Honda', price: 20000 },
//     { brand: 'Ford', price: 18000 }
//   ];

//   const threshHoldPrice = 16000;
//   const filterCar = cars.filter(car => car.price <= threshHoldPrice);

//   console.log(filterCar);

// const students = [
//     { name: 'Alice', grade: 'A' },
//     { name: 'Bob', grade: 'B' },
//     { name: 'Charlie', grade: 'A' }
//   ];

//   const highestGrade = students.filter(student => student.grade === "A");

//   console.log(highestGrade);

// const products = [
//     { name: 'Laptop', price: 1000 },
//     { name: 'Smartphone', price: 500 },
//     { name: 'Tablet', price: 300 }
//   ];

//   const newProduct = products.map(gadget => ({Name:gadget.name, Price:gadget.price}))

//   console.log(newProduct);

// const employees = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Mike', lastName: 'Johnson' }
//   ];

//   const fullName = employees.map(employee => `${employee.firstName} ${employee.lastName}`);

//   console.log(fullName);

//   const transactions = [
//     { amount: 100 },
//     { amount: 200 },
//     { amount: 300 }
//   ];

//   const totalRevenue = transactions.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);

//   console.log(totalRevenue);

// const students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 70 },
//     { name: 'Charlie', grade: 95 }
//   ];

// const avgStudent = students.reduce((accu, student) => accu + student.grade,0)/ students.length;

// console.log(avgStudent);

// const customers = [
//     { name: 'Alice', email: 'alice@example.com' },
//     { name: 'Bob', email: 'bob@example.com' },
//     { name: 'Charlie', email: 'charlie@example.com' }
//   ];

// customers.forEach(customer => {
//     console.log(`Sending thankyou email to ${customer.name} at ${customer.email}`);
// });


// const products = [
//     { name: 'Laptop', price: 1000, discount: 0 },
//     { name: 'Smartphone', price: 500, discount: 0 },
//     { name: 'Tablet', price: 300, discount: 0 }
//   ];

// products.forEach(product => {
//     if(product.price > 500){
//         product.discount=10;
//     }else if(product.price < 500){
//         product.discount=5;
//     }
// })

// console.log(products);

// const students = [
//     { name: 'Alice', score: 85 },
//     { name: 'Bob', score: 70 },
//     { name: 'Charlie', score: 95 }
//   ];

// const highestScore = students.reduce((maxScore, student) => Math.max(maxScore, student.score), -Infinity);

// const topStudent = students.filter(student => student.score === highestScore);

// console.log(topStudent);

// const students = {
//     Alice: 85,
//     Bob: 70,
//     Charlie: 95
//   };

// const passMark = 80;

// const passedStudents = Object.entries(students)
// .filter(([Name, score]) => score <= passMark)
// .reduce((obj, [Name, score]) => {
//     obj[Name] = score;
//     return obj
// }, {});

// console.log(passedStudents);

// class myClass{
//   constructor(property1, property2){
//     this.property1 = property1,
//     this.property2 = property2
//   }
//   method(){
//     console.log("This is method");
//   }
// }

// const myObject = new myClass("Value1", "Value2");

// console.log(myObject.property1);
// console.log(myObject.property1);
// myObject.method();

// const products = {
//   Laptop: 1000,
//   Smartphone: 500,
//   Tablet: 300
// };

// const discountPrice = Object.entries(products).reduce((obj, [name, price]) => {
//     obj[name] = price * 0.9
//     return obj
// }, {})
// console.log(discountPrice);

// const expenses = {
//   Food: 100,
//   Rent: 500,
//   Utilities: 200
// };

// const fullExpenses = Object.values(expenses).reduce((total, expense) => total + expense, 0)

// console.log(fullExpenses);
// 
// const employees = {
//   Alice: { salary: 5000, performance: 'excellent' },
//   Bob: { salary: 4000, performance: 'good' },
//   Charlie: { salary: 4500, performance: 'excellent' }
// };

// Object.entries(employees).forEach(([name, employee]) => {
//   if(employee.performance === "excellent") {
//     employee.salary += 500;
//   }
// })

// console.log(employees);

// const students = {
//   Alice: 25,
//   Bob: 18,
//   Charlie: 30
// };

// const threshHold = 20;
// const filteredStudent = Object.entries(students)
// .filter(([Name, age])=> age >= threshHold)
// .reduce((obj, [Name, age]) => {
//   obj[Name] = age;
//   return obj;
// },{})

// console.log(filteredStudent);

// const http = require('http');

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   // Set response headers
//   res.writeHead(200, {'Content-Type': 'text/plain'});

//   // Routing based on request URL
//   if (req.url === '/') {
//     // Handle root route
//     res.end('This is the homepage');
//   } else if (req.url === '/about') {
//     // Handle about route
//     res.end('About us page');
//   } else if (req.url === '/contact') {
//     // Handle contact route
//     res.end('Contact us page');
//   } else {
//     // Handle 404 not found
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.end('Page not found');
//   }
// });

// Listen on port 3000
// server.listen(3003, () => { 
//   console.log('Server running on port http://localhost:3003');
// });

// const { error } = require("console");
// const fs = require ("fs");

// const content = "It's a new file you don't need to do anything we will do it for you";

// fs.mkdir("NewFolder", {recursive:true}, (error)=> {
//   if(error){
//     console.error("Error in creating Folder", error);
//   }
//   console.log("Folder has Created successfully");
// });

// fs.writeFile("NewFolder/newFile", content,(error) => {
//   if(error){
//     console.error("Error in  creating File",error);
//   }
//   console.log("File created successfully");
// });

// fs.readFile("NewFolder/newFile", "utf-8", (error,data) => {
//   if (error) {
//     console.error("Error in reading file", error);
//   }
//   console.log("File content: ",data);
// })

// fs.unlink("NewFolder/newFile" ,(error) => {
//     if(error) {
//         console.error("Error in deleting file",error);
//     }
//     console.log("File has Deleted successfully");
// })

// finding Max of arry using Math, reduce and loop

// const arr = [1,3,5, 12,4,6,10];

// const maxNum = Math.max(...arr);

// console.log(maxNum);

// const maxNum = arr.reduce((prev, current) => Math.max(prev, current), -Infinity);

// console.log(maxNum);

// let max = arr[0];

// for (let i = 0 ; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max);


// let max = arr[0];
// let secMax = -Infinity;

// for (let i = 0 ; i < arr.length; i++ ){
//     if (arr[i] > max) {
//         secMax = max;
//         max = arr[i];
//     } else if (arr[i] > secMax && arr[i] !== max) {
//         secMax = arr[i];
//     }
// }

// console.log(secMax);



// let max = arr[0];
// let secSmallest = Infinity;

// for (let i = 0 ; i < arr.length; i++ ){
//     if (arr[i] < max) {
//         secSmallest = max;
//         max = arr[i];
//     } else if (arr[i] < secSmallest && arr[i] !== max) {
//         secSmallest = arr[i];
//     }
// }

// console.log(secSmallest);

// const person = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };

// const {name , address: {city , country}} = person;

// console.log(city);

// const userInput = prompt("Please enter your age: ");

// const age = parseInt(userInput);

// if (!isNaN(age)){
//     const message = age >= 18 ? "You are eligible to join" : "You are not eligible to join"

//     alert(message);
// } else {
//     alert("Invalid input, Please enter a valid age");
// }

// const transactions = [
//     { amount: 100, currency: 'USD' },
//     { amount: 50, currency: 'EUR' },
//     { amount: 200, currency: 'USD' },
//   ];

// const conversionRate = {
//     USD: 83.26,
//     EUR: 90.16,
// }

// const targetedCurrency = 'USD';
// const totalSalesInTargetCurrency = transactions.reduce((total,transaction) => {
//     const amountInTargetedCurrency = transaction.amount * conversionRate[transaction.currency];
//     return total + (transaction.currency === targetedCurrency ? transaction.amount: amountInTargetedCurrency)
// }, 0)


// console.log(totalSalesInTargetCurrency);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let max = array[0];

// for (let  i = 0; i < array.length; i++){
//     if (array[i] > max){
//         max = array[i];
//     } 
// }

// console.log(max);

// let maxScore = -1;
// let topScore = null;

// students.forEach(student => {
//     if (student.score > maxScore) {
//         maxScore = student.score;
//         topScore = student.name;
//     }
// });

// console.log(`The student who score maximum is ${topScore} with a score of ${maxScore}`);


// function capitalizeString(str){
//     return str
//     .split(" ")
//     .map((word) => word[0] .toUpperCase() + word.slice(1))
//     .join(" ")
// }

// const res = capitalizeString("hello, there i'm irfan")

// console.log(res);

// const p = (str) => str.split("").reverse("").join("") === str;
// const res = p("mom");
// console.log(res);

// function reverseString(str) {
//     return str.split(' ').reverse().join(' ');
// }
// const stringReverse = reverseString("Hello Irfan")
// console.log(stringReverse);

// const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

// const removeDuplicates = 
//  fruits.filter((item, index) => fruits.indexOf(item) === index)


// console.log("Duplicated items are: ",removeDuplicates);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const strings = ['apple', 'banana', 'orange', 'kiwi', 'grape'];

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log("Even numbers are: ",evenNumbers);

// const filterString = (arr, char) => {
//     return arr.filter(str => str.includes(char))
// }

// console.log("Filtered strings are: ", filterString(strings, "o"));

// function a(str){
//     for (let i = 0, j = str.length - 1; i <= j ; i++,j--) {
//         if(str[i] !== str[j]) {
//             console.log(`${str}: is Not a Palindrome`);
//         }else {
//             console.log(`${str}:is a Palindrome`);
//         }
//     }
// }
// a("Moms")


// const myPromise = new Promise((resolve,reject) => {
//     document.getElementById('myBtn').addEventListener("click" , () => {
//         resolve("Button Clicked")
//     });
//     document.getElementById('myBtn2').addEventListener("click" , () => {
//         reject("some reason")
//     });
// });

// myPromise.then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })

// async function myFunction() {
//     const res = await myPromise
//     return "Irfan"
// }

// const res = await myFunction()
// console.log(res);


// const users=[
//   {firstName:"john",lastName:"Biden",age:26},
//   {firstName:"jimmy",lastName:"cob",age:75},
//   {firstName:"sam",lastName:"lewis",age:50},
//   {firstName:"Ronald",lastName:"Mathew",age:26},  
// ];

// const outPut = users.reduce(function(acc, curr){
//   if (acc[curr.age]){
//     acc[curr.age]++;
//   } else{
//     acc[curr.age] = 1
//   }
//   return acc
// }, {})

// console.log(outPut);

// let student =[
//   {name:"Smith",rollNumber:31,marks:80},
//   {name:"Jenny",rollNumber:15,marks:69},
//   {name:"John",rollNumber:16,marks:35},
//   {name:"Tiger",rollNumber:7,marks:55}
//  ];

//  Print object having marks greater than 60 and rollNumber greater than 15
//  const details = student.filter((x) => x.marks > 60 && x.rollNumber > 15);
//  console.log(details);

// Print sum of marks of all the student

// const sum = student.reduce((acc, curr) => {
//   return acc+= curr.marks
// }, 0)

// console.log(sum);

// .Print the names of students who scored more than 60

// const details = student.filter((x) => {
//   return x.marks > 60
// }).map((x) => {
//   return x.name
// })

// console.log(details);

// Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

// const totalMarks = student.map((stu) => {
//   if(stu.marks<60){
//     stu.marks+=20
//   }
//   return stu
// }).filter((stu) => stu.marks>60).reduce((acc, curr) => acc + curr.marks,0)

// console.log(totalMarks);

// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];

// const employeeByDepartment = employees.reduce((acc, employee) => {
//   const department = employee.department;
//   if(!acc[department]){
//     acc[department] = [];
//   }
//   acc[department].push(employee)
//   return acc
// }, {});

// const avgSalaryByDepartment = Object.keys(employeeByDepartment).map(department => {
//   const sum = employeeByDepartment[department].reduce((acc, employee) => acc + employee.salary, 0)
//   return { department: department , average: sum / employeeByDepartment[department].length}
// })

// const highDepartmentSalary = avgSalaryByDepartment.filter(department => department.average > 65000);

// console.log(highDepartmentSalary);

// const array = [2,4,1,23,27,21,44,22,65,63, 0]

// let max = 0
// let secMax = Infinity;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i]
//     }
// }

// console.log(max);

// const fs = require("fs");

// const fileName = "example.txt";

// const fileContent = "Hello it's me irfan I'm currently studying error handling middleware is a type of middleware function designed to handle errors that occur during the request-response cycle. Middleware functions are functions that have access to the request object (req), the response object (res), and the next function (next) in the application's ";

// fs.writeFile(fileName , fileContent ,(err) => {
//     if(err) {
//         console.log(`Error in creating ${fileName} file `,err);
//     }else{
//         console.log(`File ${fileName} has  been created successfully.`);
//     }
// })

// fs.readFile(fileName, "utf8" , (err, data) => {
//     if(err) {
//         console.log(`Error in creating ${fileName} file`,err);
//     }else {
//         console.log(`Contents of '${fileName}':`);
//         console.log(data);
//     }

//     if(data.includes("irfan")) {
//         console.log('File contain phrase "irfan".');
//     }else {
//         console.log('The file does not contain the phrase "irfan".');
//     }
// })

// function fetchUsersDetails(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(userId) {
//                 resolve({id: 1, "Name": "John", "role": "Admin"})
//             } else {
//                 reject("User not found")
//             }
//         }, 1500)
//     })
// }

// function fetchUsersOrder(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(userId === 1) {
//                 resolve(["Order1" ,"Order2" , "Order3"])
//             } else {
//                 reject("Order not found for this user")
//             }
//         }, 2000)
//     })
// }

// fetchUsersDetails(1) 
// .then((user) => {
//     console.log("User details: ", user);
//     return fetchUsersOrder(user.id)
// })
// .then((orders) => {
//     console.log("User orders: ", orders);
// })
// .catch((error) => {
//     console.log("Error in displaying details" ,error);
// })

// function doSomeThingAsync() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumbers = Math.random()
//             if (randomNumbers > 0.5) {
//                 resolve(`Success!.Random numbers generated: ${randomNumbers}`)
//             } else {
//                 reject(`Failed!. Random numbers to low: ${randomNumbers}`)
//             }
//         }, 2000)
//     })
// }

// console.log("Start");

// doSomeThingAsync()
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })


// function findTheUSum (arr) {
//     let sum = 0
//     let i = 0

//     while(i < arr.length) {
//         sum += arr[i]
//         i++
//     }
//     return sum

// }

// const numbers = [2,4,6,12,6,9]
// const result = findTheUSum(numbers)
// console.log(result);

// function sumArray(array) {
//     return array.reduce((sum, current) => sum + current, 0)
// }
// const numbers = [2,4,6,12,6,9];
// const result = sumArray(numbers)
// console.log("sum of the array: ",result);

// let array = [1, 2, 3, 4, 5, 3];
// let sum = 0
// let i = 0
// while(i < array.length) {
//         sum += array[i]
//         i++
// }

// console.log("The sum of Array is: ", sum);
// let array = [2,5,6,1,6,7,4,17,3]

// const UniqueElements = [...new Set(array)]

// console.log(UniqueElements);

// const fs = require("fs")

// fs.readFile('example.txt' ,'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })


// 

// let originalObject = {
//     name:"John Doe",
//     age: 23,
//     address: {
//         street: "123 Main street",
//         city: "Washington"
//     }
// }

// let deepCopy = JSON.parse(JSON.stringify(originalObject))

// deepCopy.age = 20;
// deepCopy.address.city = "NewYork";

// console.log(originalObject);
// console.log(deepCopy);

// function isPrime(num) {
//     if (num <= 1) {
//         return false
//     }

//     for (let i = 2; i < Math.sqrt(num); i++) {
//             if(num % 1 === 0) {
//                 return false
//             }
//     }
//     return true
// }

// let array = [1,2,3,4,5,6,7,8,9,10]

// let primeNumber  = array.filter(num => isPrime(num))

// console.log(primeNumber);

// function isPalindrome(str) {

//     for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
//         if (str[i] !== str[j]) {
//             return console.log(`${str} is not a Palindrome`);
//         } else {
//             return console.log(`${str} is a Palindrome`);
//         }
//     }
// }


// isPalindrome("Mom")


// const employees = [
//     { name: "Alice", salary: 50000 },
//     { name: "Bob", salary: 65000 },
//     { name: "Charlie", salary: 42000 },
//   ];

//   function increaseSalary(percentage) {
//     for (let i = 0; i < employees.length; i++) {
//         const employee = employees[i]
//         const increaseAmount = employee.salary * (percentage / 100) 
//         employee.salary += increaseAmount
//     }
//   }

//   increaseSalary(5)

//   console.log(employees);


// function getNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(43)
//     }, 2000)
//   })
// }

// function getNUmber2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(44)
//     },1000)
//   })
// }

// async function displayPromise() {
//   try {
//     const number = await Promise.race([ getNumber() , getNUmber2()])
//     console.log(number);
//   } catch (error) {
//     console.log("Error while displaying number", error);
//   }
// }

// displayPromise()

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Promise 1 resolved'), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise 2 resolved'), 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise 3 resolved'), 3000);
// });

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log('First promise resolved:', result);
//   })
//   .catch((error) => {
//     console.error('First promise rejected:', error);
//   });

// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];

// const highestSalary = employees.reduce((maxSalary, employee) => Math.max(maxSalary,employee.salary), -Infinity)

// const topSalary = employees.filter(employee => employee.salary === highestSalary)

// console.log(topSalary);

// function isPrime(num) {
//     if(num <= 1) 
//     return false;
    
//     for (let i = 2; i < Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true;
// }

// function findPrimeNumbers(arr){
//     return arr.filter(num => isPrime(num))
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const primeNumber = findPrimeNumbers(array)

// console.log(primeNumber);


// function myPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = false;
//             if(success) {
//                 resolve("The operation is successful")
//             }else {
//                 reject("The operation is not successful")
//             }
//         },2000)
//     })
// }

// myPromise().then((message) => {
//     console.log(message);
// })
// .catch((error) => {
//     console.log(error);
// })



// function findLargestElement(nestedArray) {
//     let largest  = nestedArray[0][0];
//     for (let arr of nestedArray) {
//         for (let num of arr) {
//             if (num > largest) {
//                 largest = num;
//             }
//         }
//     }
//     return largest
// }

// const myNestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const result  = findLargestElement(myNestedArray)

// console.log("largest nested Array elements are: ",result);

// const jsonString = '{"a":[1,2,3],"b":1,"c":5,"d":[10,20]}'

// const jsonObject = JSON.parse(jsonString);

// function sumArray(array) {
//     return array.reduce((sum,curr) => sum + curr,0);
// }

// const sumA = sumArray(jsonObject.a);
// const sumD = sumArray(jsonObject.d);

// console.log(`Sum of array 'a': ${sumA}`);
// console.log(`Sum of array 'b': ${sumD}`);

// const totalSum = sumA + sumD;

// console.log(`Sum of total Array: ${totalSum}`);


// const mergeTwoSortedArray = (array1,array2) =>{
//     let merged = [];
//     let i = 0, j = 0;
//     while (i  < array1.length && j < array2.length) {
//         if(array1[i] < array2[j]) {
//             merged.push(array1[i]);
//             i++
//         }else {
//             merged.push(array2[j]);
//             j++
//         }
//     }
//     while (i < array1.length) {
//         merged.push(array1[i]);
//         i++;
//     }
    
//     while (j < array2.length) {
//         merged.push(array2[j]);
//         j++;
//     }
//     return merged
// }


// console.log(mergeTwoSortedArray([1, 3, 5, 7], [2, 4, 6, 8]));

// const intersection = (array1, array2) => {
//     let result = [];
//     for (let i = 0 ; i < array1.length; i++) {
//         if(array2.includes(array1[i])) {
//             result.push(array1[i])
//         }
//     }
//     return result
// }
// console.log(intersection([1, 2, 3,6,8, 4], [3,8, 4, 5, 6]));

// const array = [1, [2, [3, 4], 5], 6];

// const flattenArray = (array)=> {
//     return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)): acc.concat(val),[]);
// }
// console.log(flattenArray(array));

// const calculator = (a , b, operation) => {
//     switch(operation) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return b !== 0 ? a/b : "Cannot divided by zero";
//         default:
//             return "invalid Operation"
//     }
// }

// console.log(calculator(1,3, '+'));
// console.log(calculator(38,42, '-'));
// console.log(calculator(2,3, '*'));
// console.log(calculator(1,0, '/'));

//FIND THE LONGEST STRING  WITH LOOP//


// function ab(arr) {
//     let longest = arr[0];
//     for (let i = 0; i < arr.length; i++ ) {
//         if(arr[i].length > longest.length) {
//             longest = arr[i]
//         }
//     }
//     return longest
// }

// const string = ['sdfasdf','sdfadfadfasdf','adafds','adfasdfadfasdfas','asdfa']
// console.log(ab(string));