
let currentDate = $("#currentDay");
 

// universal variables
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


// Adds blocks

$(function () {

  addBlocks();

  let blockStorage = retrieveStorage

  renderBlocks (blockStorage);
 
});
// renders blocks
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

//  retrieves current hour
  var currentHour = dayjs().hour()
  $(".time-block").each(function(){
    var timeBlock = $(this)
    console.log(this.id)
    timeBlock.addClass("present")
  })

// Displays current day
$("#currentDay").text(dayjs().format('dddd, MMMM, DD, YYYY'))

