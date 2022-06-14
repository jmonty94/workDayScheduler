const scheduleEl = $('#schedule');
const currentDay = $('#currentDay')
const dateEL = moment().format('MMMM Do YYYY')
const tableEL = $('<table>')
const dayOfWeek = moment().day()
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
currentDay.text(daysOfTheWeek[dayOfWeek] + " " + dateEL)
const currentHour = moment().hour()
console.log(currentHour);
let exampleBlock = $("#hourNine").text()
console.log(exampleBlock);
console.log(parseInt(exampleBlock))

// function for iterating through timeBlock class and assigning class to change colors accordingly
function scheduleColorizer() {
    // iterates through each HTML element with the class of timeBlock
    $(".timeBlock").each(function () {
        // formats content into a 0-23 value
        let hourBlock = moment(($(this).text()), ['hh:mmA']).format("HH")
        console.log(hourBlock);

        // test to see if changes page dynamically
        // let currentHour = 12

        // if statement checking if the hourBlock is less than equal to or grater than the current hour value
        // indicating what time it is and colorizing by assigning classes accordingly
        if (hourBlock < currentHour) {
            $(this).siblings(".taskDescription").addClass("bg-secondary").removeClass("bg-success bg-danger")
            $(this).addClass("border border-secondary")
        } else if (hourBlock == currentHour) {
            $(this).siblings(".taskDescription").addClass("bg-danger").removeClass("bg-success bg-secondary")
            $(this).addClass("border border-danger")
        } else {
            $(this).siblings(".taskDescription").addClass("bg-success").removeClass("bg-danger bg-secondary")
            $(this).addClass("border border-success")
        }
    })
}
