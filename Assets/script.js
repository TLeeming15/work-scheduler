// Displays current day
var dateTime = dayjs().format('dddd, MMMM, DD, YYYY - H')
// splits the string so I can get the "H" specifically
var dateTimePieces = dateTime.split(" - ")

console.log(dateTimePieces)
console.log(element)
// selecting the current hour from datTime
var hour = dateTimePieces[1]
hour = parseInt(hour)
$("#currentDay").text(dateTimePieces[0])
// accessing class "time-block"
var timeBlocks = $(".time-block").toArray()
console.log(timeBlocks)
// loop to include each timeBlock
for(let i = 0; i<timeBlocks.length; i++) {
  var timeBlockHour = i+9
  var element = timeBlocks[i];
// if statement using the current hour to assign the appropriate past, present, or future class.
  console.log(hour);
  console.log(timeBlockHour)
  if (hour > timeBlockHour) {
    element.classList.add("past")
  } else if (hour===timeBlockHour) {
    element.classList.add("present")
  } else if (hour<timeBlockHour) {
    element.classList.add("future")
  }
}