// Your code here
// Argument(s)
// A 4-element Array of a String, String, String, and Number corresponding to a first name, family name, title, and pay rate per hour
// Returns
// JavaScript Object with keys:
// firstName
// familyName
// title
// payPerHour
// timeInEvents
// timeOutEvents
// Behavior
// Loads Array elements into corresponding Object properties. Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents.


let array = ["Gray", "Worm", "Secuirty", 1]
function createEmployeeRecord(array){
  let employeeRecord = {
    firstName: array[0],
    familyName: array[1], 
    title: array[2], 
    payPerHour: array[3], 
    timeInEvents: [],
    timeOutEvents: [], 
  }
  return employeeRecord;
}

function createEmployeeRecords(array) {
  return array.map(createEmployeeRecord);
  }

  // Add an Object with keys to the timeInEvents Array on the record Object:
  // type: Set to "TimeIn"
  // hour: Derived from the argument
  // date: Derived from the argument
  
  function createTimeInEvent(obj, dateInput){
    let [date, hour] = dateInput.split(" ");
    hour = parseInt(hour);
    let type = "TimeIn";
    obj.timeInEvents.push({type, hour, date});
    return obj;
  }

  function createTimeOutEvent(obj, dateInput){
    let [date, hour] = dateInput.split(" ");
    hour = parseInt(hour);
    let type = "TimeOut";
    obj.timeOutEvents.push({type, hour, date});
    return obj;
  }

  // Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent

  function hoursWorkedOnDate(obj, dateWorked) {
    let inTime = obj.timeInEvents
      .filter((element) => element.date === dateWorked)
      .map((element) => element.hour);
  
    let outTime = obj.timeOutEvents
      .filter((element) => element.date === dateWorked)
      .map((element) => element.hour);
  
    return (outTime - inTime) / 100;
  }

  // Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine 
  // amount owed. Amount should be returned as a number.

  function wagesEarnedOnDate(obj, date){
    return obj.payPerHour * hoursWorkedOnDate(obj, date);

  }

  // Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee 
  // in the record used as context. Amount should be returned as a number. 
  // HINT: You will need to find the available dates somehow...

  function allWagesFor(obj) {
    let result = [];
    const allDates = obj.timeInEvents.map((element) => (element = element.date));
    for (let element of allDates) {
      result.push(wagesEarnedOnDate(obj, element));
    }
    return result.reduce((a, b) => a + b, 0);
  }

  // Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee 
  // in the record used as context. 
  // Amount should be returned as a number.

  function calculatePayroll(array){
    return array.map(obj => allWagesFor(obj))
    .reduce((a, b) => (a = a + b), 0);
  }

// createEmployeeRecord(array);
// createEmployeeRecords(array);

// createEmployeeRecords
// Argument(s)
// Array of Arrays
// Returns
// Array of Objects
// Behavior
// Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array

