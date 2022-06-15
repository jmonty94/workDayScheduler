const scheduleEl = $('#schedule');
const currentDay = $('#currentDay')
const dateEL = moment().format('MMMM Do YYYY')
const tableEL = $('<table>')
const dayOfWeek = moment().day()
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const currentHour = moment().hour()

currentDay.text(daysOfTheWeek[dayOfWeek] + " " + dateEL)

// function for iterating through timeBlock class and assigning class to change colors accordingly
function scheduleColorizer() {
    // iterates through each HTML element with the class of timeBlock
    $(".time-block").each(function () {
        // formats content into a 0-23 value
        const hourBlock = moment(($(this).text()), ['hh:mmA']).format("HH")
        // if statement checking if the hourBlock is less than equal to or grater than the current hour value
        // indicating what time it is and colorizing by assigning classes accordingly
        if (hourBlock < currentHour) {
            $(this).siblings(".taskDescription").addClass("bg-secondary").removeClass("bg-success bg-danger")
            $(this).addClass("border border-secondary")
        } else if (hourBlock === currentHour) {
            $(this).siblings(".taskDescription").addClass("bg-danger").removeClass("bg-success bg-secondary")
            $(this).addClass("border border-danger")
        } else {
            $(this).siblings(".taskDescription").addClass("bg-success").removeClass("bg-danger bg-secondary")
            $(this).addClass("border border-success")
        }
    })
}
// when user presses save it stores textarea content into localstorage as long as there is content
$(".saveBtn").on("click", function () {
    if ($(this).siblings(".taskDescription").val() !== "") {
        const taskText = $(this).siblings(".taskDescription").val()
        const timeValue = $(this).siblings().text()
        
        localStorage.setItem(timeValue, taskText)
    }
})
// created a function that iterates over every time-block class and gets the localStorage task that matches
function displayEvents() {
    $(".time-block").each(function () {
        // the key is the text of the time-block div
        const hourKey = $(this).text()
        // the storedTask is the corresponding value to each key
        const storedTask = localStorage.getItem(hourKey)
        // if there is a value for stored task run the following
        if (storedTask) {
            // sets a variable for the textarea html element
            const textArea = $(this).siblings(".taskDescription");
            
            // sets that variables value to be displayed
            textArea.val(storedTask)
        }
    })
}
displayEvents()
scheduleColorizer()