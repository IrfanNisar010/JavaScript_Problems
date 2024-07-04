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

// let name={
//     firstname:'moahmmed',
//     lastname:'razik',
//     printfullName:function(){
//         console.log(this.firstname  + ' ' + this.lastname);
//     }

const { resolveInclude } = require("ejs");

    

// }
// name.printfullName();

// let name2={
//     firstname:'mohammed',
//     lastname:'basim',

// }
// name.printfullName.call(name2);

// const mypromise= new Promise((resolve,reject)=>{
//     let num = prompt('enter the number')
//     if(num%2==0){
//         resolve('even');
//     }
//     else{
//         reject('odd');
//     }
// })
// mypromise.then(
//     res=>{
//         console.log(res);
//     }

// )
// .catch(
//     err=>{
//         console.log(err);
//     }
// )

// function add(num1,num2){
//     return new Promise((resolve,reject)=>{
//         let sum=num1+num2;
//         resolve(sum)
//     });
// }
// add(6,7)
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error)
// })






////////////  JS //////////


//HOF//


// function hello(operators,a,b){
//     return operators(a,b);
// }
// function add(x,y){
//     return x+y;
// }
// console.log(hello(add,5,7))


//returning  a  function eg: HOF//


// function greet(hello){
//     return function(name){
//         console.log(hello + " " + name);
//     }
// } 
// const hi=greet('hello');
// hi('ri');

//FUNCTION COMPOSITION//

// function add(x){
//     return x+3;
// }

// function multi(x){
//     return x*3;
// }
// const output=multi(add(4));
// console.log(output);



//CLOSURE//


// function a(b){
//     b()
//     console.log('hi');
//     function b(){
//         console.log('haloo');
//     }
// }
// a();


//HOISTING//

// add();
// function add(){

// }

//CALL//

// const person={
//     name:'razik'
// };
// function greet(message){
//     console.log(message + ' '+ this.name)
// }
// greet.call(person,'hi');


//APPLY//

// const person ={
//     name:'razik'
// };
// function greet(message){
//     console.log(message + this.name)
// }
// greet.apply(person,['hello']);



//BIND//

// const person={
//     name:'razik'
// };
// function greet(message){
//     console.log(message + this.name);
// }
// const hi=greet.bind(person)
// hi('hii');

//STIRNG LENGHT//

// const str='hiiii';
// console.log(str.length);

//UPPER CASE,LOWERCASE//
// const name='iiihhFIJGIO'
// const hi= name.toLowerCase()
// console.log(hi);

//PAD  STRING METHOD//

// const a = '123'
// const b= a.padStart(5,'0')
// console.log(b);

//CHARTAT STRING METHODsdqws   //   

// const a='hiii hello';
// const b= a.charAt(7);
// console.log(b);

//SPLIT IN STRING METHOD//

// const a ='razik,the';
// const b=a.split(',');
// console.log(b);

//CONCAT STRING METHOD//

// const a='hoiii'
// const b='razik'
// const out= a.concat(b);
// console.log(out);

//SUBSTRING IN STRING METHOD//

// const a='hiiiii hello'
// const b=a.substring(7,10)
// console.log(b);


//ARRAY METHODS MAAAAAPPPPP//

// const a=[1,2,3,4,5,6];
// const output=a.map(function(num){
//     return num*4;
// })
// console.log(output);

//FILTER IN ARRAY METHOD//

// const a=[1,2,3,4,5];
// const output=a.filter(function(num){
//     return num%2;
// })
// console.log(output);

//REDUCE IN ARRAY METHOD//

// const a=[1,2,3,4];
// const output=a.reduce(function(acc,curr){

//     return acc+curr;
// },0);
// console.log(output);

//SUM WITH REDUCE//

// const a=[1,2,3,4];
// const b=a.reduce(function(acc,curr){
//     let sum=curr+acc;
//     return sum;
// },0)
// console.log(b);

//FIND IN ARRAY METHOD//

// const a=[1,2,3,4];
// const output=a.find(function(num){
//     return num>1;
// });
// console.log(output);

//SORT IN ARRAY METHOD//

// const fruits=[3,4,1,2]
// const b=fruits.sort();
// console.log(b);

//OBJECT FREEZE//

// const obj={
//     name:'razik',
//     age :14
// }
// Object.freeze(obj);

// obj.name='raz';
// console.log(obj);

//CALL BACK//

// function fetch(callback){
//     setTimeout(()=>{
//         const a={name:'razik',age:18}
//         callback(a);
//     },4000)
// }
// function output(a){
//     console.log('the answer is:',a);
// }
// fetch(output);

//TERNARY OPERATOR//

// const age=15;
// const b=age>=18?'you are adult':'you are minor';
// console.log(b);

//TEMPLAATE LITERALS//
 
// const a='razik'
// const b=18
// const output=`I am ${a} and I am ${b} years old`
// console.log(output);

//DEFAULT PARAMETER//

// function a(name='any'){
//     console.log(`hello ${name}`);
// }
// a();
// a('razik');

//CURRYING//

// function a(x,y){
//     return x+y;
// }
// function b(x){
//     return function(y){
//         return x+y;
//     }
// }
// const c=b(5)
// console.log(c(8));

//TYPE CASTING EXPLICIT//

// const a=10;
// const b=String(a);
// console.log(typeof b);

// IMPLICIT//

// const a=10;
// const b='the num is '+a
// console.log(typeof b);

//ARROW FUNCTION//

// const a=(x,y)=>x+y;
// console.log(a(3,4));

//CLASS//

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
//   }
  
//   const john = new Person('John', 30);
//   john.greet(); 
  
 //ASYNCHRONOUS//

// console.log('hi');

// setTimeout(()=>{
//     console.log('hello');
// },4000)
// console.log('heii');

//PROMISE.ALL//

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promsie one finished'),1000)
// })

// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise two finished'),2000)
// })

// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise three finished'),3000)
// })

// Promise.all([promise1,promise2,promise3])
// .then(values=>{
//     console.log('all finished',values)
// })
// .catch(error=>{
//     console.log('no error',error)
// })

//PROMISE ALL SETTELED//

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise one finished'),1000)
// })
// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('promise two rejected'),2000)
// })
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise three finished'),3000)
// })

// Promise.allSettled([promise1,promise2,promise3])
// .then(values=>{
//     console.log('all finished',values)
// });

//PROMISE.RACE//

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise one finished'),1000)
// })
// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('promise two rejected'),2000)
// })
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise three finished'),3000)
// })

// Promise.race([promise1,promise2,promise3])
// .then(values=>{
//     console.log('all finished',values)
// })
// .catch(error=>{
//     console.log('one error',error)
// })

//FOREACH//

// const a=[1,2,3,4];
// const out=a.map(function (num){
//     console.log(num*2);
// })

//SUM REDUCE IN OBJECT//
// const a=[{a:2,b:3},{a:2,b:3} ,{a:2,b:3}];

// const output=a.reduce((acc,curr)=>{
//     return acc=curr.b+acc,acc=curr.a+acc
// },0)
// console.log(output)

//LARGEST STRING IN REDUCE//

// const a=['apple','orange','banana'];
// const b=a.reduce((acc,curr)=>{
//     if(curr.length<acc.length){
//         return acc;
//     }
//     else{
//         return curr;
//     }
// });
// console.log(b);

//FOR OF//

// const a=[1,2,3,4];
// for(const value of a){
//     console.log(value)
// }

//FOR IN//

// const a={a:1,b:2,c:3}
// for(const key in a){
//     console.log(key)
// }

//PASS BY VALUE//

// function modifyValue(value) {
//     value = 10;
//   }
  
//   let x = 5;
//   modifyValue(x);
//   console.log(x); //OUTPUT=5//

   //PASS BY REFERENCE//

//   function modifyArray(array) {
//     array.push(4);
//   }
  
//   let arr = [1, 2, 3];
//   modifyArray(arr);
//   console.log(arr); // Output: [1, 2, 3, 4]
  
//UNDEFINED//

// let x;
// console.log(x);
  
//SPREAD OPERATOR//

// const a=[1,2,3,4];
// const n=[...a,5,6];
// console.log(n)

//OBJECT METHOD  SPREAD//

// const a={name:'razik',age:18}
// const b={...a,city:'malappuram'}
// console.log(b);

//REST OPERATOR//

// function sum(...numbers){
//    return numbers.reduce((acc,curr)=>acc+curr,0)
// }
// console.log(sum(1,2,34,5))

//SHALLOW COPY//

// const og={name:'razik',age:18}
// const shallowcopy={...og};
// shallowcopy.age=39

// console.log(shallowcopy);

//DEEP COPY//

// const a=[[1,2,3],[3,4,5]];
// const deepcopy=JSON.parse(JSON.stringify(a));
// deepcopy[0][0]=10;
// console.log(deepcopy);

//GENERATOR FUNCTION //

// function *genrator(){
//    yield 1;
//    yield 2;
//    yield 3;
// }
// const b=genrator();
// console.log(b.next())
// console.log(b.next())
// console.log(b.next())
// console.log(b.next())

//EVENT DELEGATION IN HTML//


//REMOVE NULL AND UNDEFINED FROM ARRAY//

// const arr=[1,2,3,null,4,undefined,5];
// const b=arr.filter(item=>item !== null && item !== undefined);
// console.log(b);

//REPLACE 4 WITH 40//

// const arr=[1,2,3,null,4,undefined,5]
// const b=arr.map(num=>{
//    if(num==4){
//       return 40;
//    }
//    else{
// return num;
//    }
// })
// console.log(b)


//SUM WTH PROMISE//


// function add(num1,num2){
//    return new Promise((resolve,rejrcct)=>{
//       let sum = num1+num2;
//       resolve(sum);
//    })
// }
// add(8,9)
// .then(result=>{
//    console.log(result);
// })
// .catch(error=>{
//    console.log(error)
// })


//EMPTY OBJECT//

// let obj={};
// let b=Object.keys(obj);
// console.log(b)

//FIND PERSON AGED LESS THAN 54//

// let objj = [
//    {name : 'a', age : 25},
//    {name : 'b', age : 67},
//    {name : 'c', age : 18},
//    {name : 'd', age : 54}
// ]
// const b=objj.filter((num)=>{
//    return num.age<=54
// })
// console.log(b);

//BITWISE AND//

// let result =5&3
// console.log(result);

//BITWISE OR//

// let result =5|3
// console.log(result);

//CALLBACK SUM//

// function fetch(num1,num2,callback){
// let sum = num1 +num2
// callback(sum)
// }
// function output(sum){
// console.log(sum)
// }
// fetch(12,2,output);

// DELTE DUPLICATE PRIJNT ONE TIME FULL//

// const arr=[1,2,3,4,4,5,5,3];
// const b=arr.filter((num,item)=>{
//    return arr.indexOf(num)===item
// })
// console.log(b);

//WTIH SET//

// const arr=[1,2,3,4,4,5,5,3];
// const b=new Set(arr);
// console.log(b);

//OBJECT SUM//

// const arr={a:1,b:2};
// let sum =0;
// for(const key in arr){
//    sum= sum+arr[key]

// }
// console.log(sum);

//MATH OPERATOR//

// let a=4.2;
// console.log(Math.round(a))

//MULTIPLE OF 5 WITH LOOP//

// for(let i=1;i<=20;i++){
//    let multiple=i*5;
//    console.log(multiple);
// }

      //EXTENDS KEYWORD//

// class Animal {
//    constructor(name) {
//        this.name = name;
//    }

//    speak() {
//        console.log(`${this.name} makes a sound.`);
//    }
// }

// class Dog extends Animal {
//    constructor(name, breed) {
//        super(name); // Call the parent class constructor
//        this.breed = breed;
//    }

//    speak() {
//        console.log(`${this.name} barks.`);
//    }
// }

// const dog = new Dog('Buddy', 'Labrador');
// console.log(dog.name); // Output: "Buddy"
// console.log(dog.breed); // Output: "Labrador"
// dog.speak(); // Output: "Buddy barks."

//RECURSION//

// function factorial(n) {
//    // Base case: if n is 0 or 1, return 1
//    if (n === 0 || n === 1) {
//        return 1;
//    }
//    // Recursive case: call factorial function with a smaller value of n
//    return n * factorial(n - 1);
// }
// // Example usage
// console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)

//VARIABLE SHADOWING//

// var x=10;

// function a(){
//    var x=20;
//    console.log(x);       //output 20;
// }
// a();
// console.log(x);         // output 10;

//NULLISH OPERATOR//

// const a=20;
// const b=' ';
// const c= null;
// const d= undefined;
// const e= 'helo';

// const result1=a?? 'default';
// const result2= b?? 'default';
// const result3= c?? 'default';
// const result4 = d?? 'default';
// const result5= e?? 'default';
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// OPTIONAL CHAINING//

// const user = {
//    name: 'John',
//    address: {
//        city: 'New York',
//        postalCode: '10001'
//    }
// };

// // Without optional chaining (may throw error if address is undefined)
// const city = user.address.city; // 'New York'

// // With optional chaining (returns undefined if address is undefined)
// const citySafe = user.address?.city; // 'New York'

// console.log(city);      // Output: 'New York'
// console.log(citySafe);  // Output: 'New York'

//IIFE//

// (function a(){
//    var x=10;
//    console.log(x);
// })();

//CLEAR INTERVAL//

// function a(){
//    console.log('hello');
// }
// const b=setInterval(a,1000);
// setTimeout(()=>{
//    clearInterval(b)`
//    console.log('poyko keynj')
// },5000)

//WEAK MAP//


// let weakMap = new WeakMap();
// let obj1 = {};
// let obj2 = {};
// weakMap.set(obj1, "value associated with obj1");
// console.log(weakMap.get(obj1)); // Output: "value associated with obj1"
// obj1 = null; // obj1 can now be garbage collected

//WEAK SET//

// let weakSet = new WeakSet();
// let obj3 = {};
// weakSet.add(obj3);
// console.log(weakSet.has(obj3)); // Output: true
// obj3 = null; // obj3 can now be garbage collected
// console.log(weakSet.has(obj3)); // Output: false

//FACTORIAL//

// function factorial(n){
//       if(n==0 || n==1){
//             return 1;
//       }
//       else{
//              return n*factorial(n-1)
//       }
// }
// console.log(factorial(5));

//PALINDROME//

// function a(b){
//       return b=b.split('').reverse().join('')
// }
// console.log(a('razik'));

//ASYNC AWAIT//

// function fetch(){
//       return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                   const data={message:'data fetched sucessfully'}
//                   resolve(data)
//             },3000)
//       })
// }
// async function output(){
//       try{
//             const data = await fetch()
//             console.log(data.message)
//       }
//       catch(error){
//             console.error(data.message)
//       }
// }
// output()

//OBJECT DESTRUCTURING//

// const a={
//       name:'razik',
//       age:18,
//       gender:'male',
//       city:'malappuram'
// }
// const {name,age,gender,city}=a;
// console.log(name);
// console.log(age);

// ARRAY DESTRUCTURING//

// const a=['red','green','blue'];
// const [firstcolor,secondcolor,thirdcolor]=a;
// console.log(secondcolor)

// BOTH WITH REST BAKKI OF EXAMPLE IN GPT//

// Object destructuring with default value and rest syntax
// const { firstName = 'Unknown', lastName, ...rest } = person;
// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(rest);      // Output: { age: 30, country: 'USA' }

// // Array destructuring with default value and rest syntax
// const [primaryColor, secondaryColor = 'white', ...otherColors] = colors;
// console.log(primaryColor); // Output: red
// console.log(secondaryColor); // Output: green
// console.log(otherColors);  // Output: ['blue']


// SUM OF ARRAY IN OBJECT IN ARRAY//

// const ab=[{ab:[1,2,3,4,5]}]
// let sum=0;
// for(let i=0;i<ab[0].ab.length;i++){
//       sum=sum+ab[0].ab[i]
// }
// console.log(sum);

//FLAT MAP//

// const a=[1,2,34,5];
// const b=a.flatMap((num)=>{
//       return num*2
// })
// console.log(b);

//FLAT//

// const a=[1,2,[3,4],[5,[6,7]]]
// const b=a.flat();
// console.log(b);

//REMOVE ADJACENT ODD NUMBERS//

// function a(arr){
//       for(let i=0;i<arr.length;i++){
//             if(a[i]%2!==0 && a[i+1]%2!==0){
//                   arr.splice(i,1)
//             }
//       }
//       return arr;
// }
// const b=[1,2,3,4,5,3,7,8]
// console.log(a(b));

//OR//

// const a=[1,2,3,5,4,7];
// for(let i=0;i=a.length;i++){
//       if(a[i]%2!==0 && a[i+1]%2!==0){
//             a.splice(i,1)
//             console.log(a)
//       }
      
      
// }

//QUESTIOIN //

//  const a=[[{a:20}],[{a:80}]]
//  const b=a.flat().reduce((acc,curr)=>{
//        return acc+curr.a
//  },0)
//  console.log(b)


//TWO ARRAY MULTIPLICATION //

// let a=[1,2,3,4,5]
// let b=[4,5,6,7,8]
// const c=a.map((num,item)=>{
//       return num*b[item]
// })
// console.log(c)

//LARGEST NUMBER//

// let a=10;
// let b=1000;
// let c=9;
// const ab=a>b?a:b;
// const bc=ab>c?ab:c;
// console.log(bc);

//FIND THE MAX NUMBER IN AN ARRAY//

// function ab(arr){
//       let max=a[0]
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]>max){
//                   max=arr[i]
//             }
//       }
//       return max;
// }
// const a=[1,2,3,4,9]
// console.log(ab(a))

//CALCULATE THE AVERAGE //

// function ab(arr){
//       let sum=0;
//       for(let i=0;i<arr.length;i++){
//             sum=sum+a[i]
//       }
//       return sum/arr.length
// }
// const a=[1,2,3,4,5,66]
// console.log(ab(a))

//COUNT EVEN NUMBERS IN AN ARRAY//

// function ab(arr){
//       let count=0;
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]%2==0){
//                   count++;
//             }
//       }
//       return count;
// }
// const a=[1,2,3,4,5,5,6]
// console.log(ab(a))

//FIND THE INDEX OF SPECIFIC ELEMENT IN AN ARRAY//

// function ab(arr,target){
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]==target){
//                   return i;
//             }
//       }
//       return -1;
// }   
// const a=[1,2,3,4,5,6]
// const target=4
// console.log(ab(a,target))           

//CHECK IF AN ARRAY CONTAINS GIVEN ELEMENT/

// function ab(arr,target){
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]==target){
//                   return true;
//             }
//       }
//       return false;
// }
// const a=[1,2,3,4,5]
// const b=[99]
// console.log(ab(a,b))

//CALCULATE THE PRODUCT OF THE ARRAY//

// const a=[1,2,3,4,77]
// let multiple=1
// for(let i=0;i<a.length;i++){
//      multiple=multiple*a[i]
// }
// console.log(multiple)

//FIND THE LONGEST STRING  WITH LOOP//

// function ab(arr){
//       let longest=arr[0];
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]>longest){
//                   longest=arr[i]
//             }
//       }
//       return longest;

// }
// const a=['kffjjs','sjfodosfshhflfsl','fjdhfo']
// console.log(ab(a))

//REVERSE AN STRING//

// function ab(arr){
//       let result=[]
//       for(let i=0;i<arr.length;i++){
//             reverse=arr[i].split('').reverse().join('')
//             result.push(reverse)
//       }
//       return result
// }
// const a=['hello','world']
// console.log(ab(a));

//COUNT HOW MANY THAT ELEMANTS HAD COME IN AN ARRAY//

// function ab(arr,target){
//       let count=0
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]==target){
//                   count++;
//             }
//       }
//       return count;
// }
// const a=[1,2,2,2,2,3,4,4,55,5,2]
// const b=2;
// console.log(ab(a,b));

//SUM THE SQUARE OF NUMBERS IN AN ARRAY//

// function ab(arr){
//       let sum=0;
//       for(let i=0;i<arr.length;i++){
//             sum=sum+arr[i]*arr[i]
//       }
//       return sum;
// }
// const a=[1,2,3]
// console.log(ab(a));

//FIND UNIQUE NUMBERS IN AN ARRAY//

// function a(arr){
//       let result=[]
//       for(let i=0;i<arr.length;i++){
//             if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
//                   result.push(arr[i])
//             }
//       }
//       return result;
// }
// const ab=[1,2,3,4,4,5,5,5,3,2]
// console.log(a(ab))   

//SECOND LARGEST NUMBER//

// const arr = [8,1,2,3,7,5,9]
// const a=arr.sort((a,b)=>b-a)
// console.log(a[1])


// const array = [1,3,4,6,7,23];

// const temp =array[0];
// array[0] = array[array.length - 1]
// array[array.length - 1] = temp

// console.log(array);



// const arr =[[{a:20}],[{a:80}]]
// const findSum = arr.flat().reduce((acc,curr) => {
//     return acc+curr.a 
// },0);
// console.log(findSum);


// function isPrime(num) {
//     if(num <= 1)return false;
//     if(num <= 3)return true;

//     if(num % 2 === 0 || num % 3 === 0)return false;

//     for(let i = 5; i * i<= num; i += 6) {
//         if(num % i === 0 || num % (i + 2) === 0)return false;
//     }
//     return true
// }

// function* primeGenerator() {
//     let num = 2;
//     while(true) {
//         if(isPrime(num)) {
//             yield num;
//         }
//         num++
//     }
// }

// const prime= primeGenerator();

// console.log(prime.next().value);
// console.log(prime.next().value);
// console.log(prime.next().value);
// console.log(prime.next().value);
// console.log(prime.next().value);
// console.log(prime.next().value);

// function* numberGenerator(limit) {
//     let num = 0;
//     while(num <= limit) {
//         if(num % 2 !== 0) {
//             yield num;
//         }
//         num++
//     }
// }

// const limit = 10
// const evenNum = numberGenerator(limit)

// for (let displayEven of evenNum) {
//     console.log(displayEven);
// }


// const array = [1,2,3,4,5,6,7,8,9,10];

// let highestOdd = -Infinity;

// for (let i = 0; i < array.length; i++) {
//       const num = array[i];
//       if(num % 2 !== 0 && num > highestOdd) {
//             highestOdd = num
//       }
// }


// console.log(highestOdd);

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const oddNum = arr.filter(num => num % 2 !== 0);

// const highestOddNum = oddNum.reduce((max, curr) => Math.max(max,curr),-Infinity);

// console.log(highestOddNum);

// const calculator = {
//       compute: function(a,b,callback) {
//             const result = a + b;
//             callback(result)
//       }
// }

// function displayResult(result) {
//       console.log("Result:", result);
// }

// calculator.compute(4,4, displayResult)


// function isPrime(num) {
//       if(num <= 1)return false;

//       for (let i = 2; i < Math.sqrt(num); i++) {
//             if(num % i === 0) {
//                   return false
//             }
//       }
//       return true
// }

// let arr = [1,2,3,4,5,6,7,8,9,10];

// const primeNum = arr.filter(num => isPrime(num))

// const max = Math.max(...primeNum)

// console.log(max);






// // Function to remove element at a specific index
// function removeElementAtIndex(arr, index) {
//       if (index < 0 || index >= arr.length) {
//         console.log("Index out of bounds");
//         return;
//       }
    
//       for (let i = index; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//       }
    
//       arr.length = arr.length - 1;
//     }
    
//     let arr = [1,2,3,4,5,6,7,8,9,10];
    
//     console.log("Original array:", arr);
    
//     removeElementAtIndex(arr, 2);
    
//     console.log("Array after removing the element at index 2:", arr);


// let arr = [3,6,7,8,9,2,5]

// function sortedArray(arr) {
//       let n = arr.length
//       for (let i = 0; i < n - 1; i++) {
//             for (let j = 0; j < n - 1 - i; j++) {
//                   if(arr[j] > arr[j + 1]) {
//                         let temp = arr[i];
//                         arr[i] = arr[j + 1];
//                         arr[j + 1] = temp
//                   }
//             }
//       }
//       return arr
// }

// console.log("Sorted array: ", sortedArray(arr));


// function countVowels(word) {
//       const vowels = 'aeiouAEIOU';

//       let count = 0;
      
//       for (let char of word) {
//             if(vowels.includes(char)) {
//                   count++
//             }
//       }
//       return count
// }

// function countVowelsInArray(wordsArray) {
//       const result = [];

//       for (let word of wordsArray) {
//             const vowelsCount = countVowels(word);
//             result.push({word: word, vowels:vowelsCount})
//       }
//       return result
// }

// const word = ['hello', 'world', 'javascript', 'coding', 'example'];

// const lastResult = countVowelsInArray(word);

// console.log(lastResult);

