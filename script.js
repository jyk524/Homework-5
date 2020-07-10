// # 05 Third-Party APIs: Work Day Scheduler

// Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

// ## User Story

// ```
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// ----------- text block created in block
// THEN I can enter an event
// WHEN I click the save button for that timeblock atrribute same index as block
//------------store local
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```

// The following animation demonstrates the application functionality:

// ![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

// ## Review

// You are required to submit the following for review:

// * The URL of the deployed application.

// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

// as soon as i open my page get document on ready

// Create time blocks with sub divs
// use jQuery to add event listener, blocks
//bunch of rows and 3 colums
// col 1. time with text moved to the side and borders added, attribute added to target
// col 2. text box, which needs attribute to help differentiate it
// col 3. save box, which will locally save whats in the box, needs atrributes aswell

// ----------------------------------------------------------------
// ------------------------------------------------------------------

//TODO: as soon as i open my page get document on ready
$(document).ready(function () {
  console.log("ready!");
});

const date = moment();
today = moment().format("LLLL");
currentDay.textContent = today;

// TO GET THE CURRENT DATE - find a way to display the day of the week
var todays = new Date();
var dd = String(todays.getDate()).padStart(2, "0");
var mm = String(todays.getMonth() + 1).padStart(2, "0");
//January is 0!
var yyyy = todays.getFullYear();
//today = mm + "/" + dd + "/" + yyyy;
// document.write(today);

// TO GET CURRENT TIME - DONE

//TODO: generate the div - create 9 sub divs

//in each sub div display time on the left, input area in the middle, submit button the the right
//depending on the time of the day, it will diplay differently
//array of time objects

var time = [
  00,
  01,
  02,
  03,
  04,
  05,
  06,
  07,
  08,
  09,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

console.log(time);

// STYLING - for loop that iterates through the time array to generate the div colors
// set attribute colors
// in the for loop use the classes of past present future

// function colorBlock () {
// for (var i = 0; i < time.length; i++) {

//     if (myHour() === time[i]) {
//     //if time.key === myHour, then block is red
//     }
//     if (myHour() < time[i]) {
//     //if time.key < myHour, then block is grey
//     }
//     if (myHour() > time[i]) {
//     // if time.key> if time.key < myHour, then block is green
//     }
//     //     if (myHour < 09 || myHour > 17){
//     // //turn  all the divs to yellow
// }};

// gets the current of the user when are on the website

function myHour() {
  var d = new Date();
  var n = d.getHours();
  return parseInt(n);
}

console.log(myHour());

//selects all of the time blocks
$(".time-block").each(function (element) {
  console.log(this);
  //targets the timblock saves it to timeRow
  var timeRow = $(this);
  //put in the user time
  var now = myHour();
  //splits the number from the hour which allows it to be parsed so we can compare it to the hour [1] is used because the first id is current day
  var time = parseInt(timeRow.attr("id").split("-")[1]);
  console.log(time);
  if (now === time) {
    $(this).addClass("present");
    //if time.key === myHour, then block is red
  }
  if (now > time) {
    $(this).addClass("past");
    //if time.key < myHour, then block is grey
  }
  if (now < time) {
    $(this).addClass("future");
    // if time.key> if time.key < myHour, then block is green
  }
});

//save button with Javascript
// var saveButton = document.querySelectorAll(".saveBtn");
// var descriptionText = document.querySelector(".description");
// for (let i = 0; i < saveButton.length; i++) {
//   saveButton[i].addEventListener("click", function () {
//     console.log("Button was clicked.");
//     var divHour = event.target.parentNode.getAttribute("id");
//     var description = descriptionText.value.trim();
//     console.log(divHour);
//     console.log(description);
//     // storeTasks(divHour, description);
//   });
// }

// jQuery Save button savebutton is targeted, when save button is clicked
$(".saveBtn").on("click", function () {
  //get nearby values
  console.log(this);
  // this targets the text box, sibling will target the description in the textbox and pull it with value
  var text = $(this).siblings(".description").val();
  //time is set by targeting the text box and getting the id element from the parent
  var time = $(this).parent().attr("id");
  //set items in local storage.
  localStorage.setItem(time, text);
});

// calling value of hour-9 and placing it in the proper hour description value
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// function init() {
//   // Write code here to check if there are todos in localStorage
//   // If so, parse the value from localStorage and assign it to the todos variable
//   todos = JSON.parse(localStorage.getItem("todos")) || [];
//   // Render todos to the DOM
//   renderTodos();
// }
