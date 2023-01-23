// Displays current day
var dateTime = dayjs().format('dddd, MMMM, DD, YYYY - H')
var dateTimePieces = dateTime.split(" - ")

console.log(dateTimePieces)
console.log(element)

var hour = dateTimePieces[1]
hour = parseInt(hour)
$("#currentDay").text(dateTimePieces[0])

var timeBlocks = $(".time-block").toArray()
console.log(timeBlocks)

for(let i = 0; i<timeBlocks.length; i++) {
  var timeBlockHour = i+9
  var element = timeBlocks[i];

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