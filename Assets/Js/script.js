const scheduleEl = $('#schedule');
const currentDay = $('#currentDay')
const dateEL = moment().format('MMMM Do YYYY')
const tableEL = $('<table>')
const dayOfWeek = moment().day()
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
currentDay.text(daysOfTheWeek[dayOfWeek] +" " + dateEL)
const currentHour = moment().hour()
console.log(currentHour);
let exampleBlock = $("#hourNine").text()
console.log(exampleBlock);
console.log(parseInt(exampleBlock))
$(".time-block").each(function() {
    let hourBlock = moment(($(this).text()),['hh:mmA']).format("HH")
    console.log(hourBlock);
})