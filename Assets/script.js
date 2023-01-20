
let currentDate = $("#currentDay");
 

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let blockContainer = $ ("#block-container")
let timeBlockClasses = ["row", "time-block"];
let timeClasses = ["col-2", "col-md-1", "hour", "text-center", "py-3" ];
let textAreaClasses = ["col-8", "col-md-10", "desctiption"];
let saceBtnClasses = ["btn", "saveBtn", "col-2", "col-md-1"];
let saveImageClasses = ["fas", "fa-save"];
let pastClass = "past";
let presentClass = "present";
let futureClasss = "future";

const visibleRows = 3;



const workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
 const dataIndex = "data-index";




$(function () {

  addBlocks();

  let blockStorage = retrieveStorage

  renderBlocks (blockStorage);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
});

function renderBlocks(blockStorage) {

 
  for (let i = 0; i < schStorage.length; i++) {

    blockContainer.children().eq(blockStorage[i].id).children("textarea").val(blockStorage[i].schedule);    
  }
}

// function addBlocks ();

//   for (let i=); i < workHours.length; i++){
//     let wHour = workHours [i];

//     let hour = (wHour);

//     let className = getClassName (hour);

//     let blockDiv = $("<div>");
//     blockDiv.addClass(className)

//     let time = $("<div>");
//     time.text(wHour);
//     time.addClass(timeClasses.join(""))

//     let textArea = $ ("<textarea>");
//     textArea.addClass(textAreaClasses.join(""));
//     textArea.attr("rows", visibleRows);
//   }

 
  var currentHour = dayjs().hour()
  $(".time-block").each(function(){
    var timeBlock = $(this)
    console.log(this.id)
    timeBlock.addClass("present")
  })
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format('dddd, MMMM, DD, YYYY'))

