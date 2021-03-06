
setInterval(function () {
    var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDay)
}, 0) // time is set to 0 so current day is display right away. 
function save1() { localStorage.setItem(document.getElementById("slot-one").name, document.getElementById("slot-one").value) }
function save2() { localStorage.setItem(document.getElementById("slot-two").name, document.getElementById("slot-two").value) }
function save3() { localStorage.setItem(document.getElementById("slot-three").name, document.getElementById("slot-three").value) }
function save4() { localStorage.setItem(document.getElementById("slot-four").name, document.getElementById("slot-four").value) }
function save5() { localStorage.setItem(document.getElementById("slot-five").name, document.getElementById("slot-five").value) }
function save6() { localStorage.setItem(document.getElementById("slot-six").name, document.getElementById("slot-six").value) }
function save7() { localStorage.setItem(document.getElementById("slot-seven").name, document.getElementById("slot-seven").value) }
function save8() { localStorage.setItem(document.getElementById("slot-eight").name, document.getElementById("slot-eight").value) }
// these are the function connected to each and individual button display for each hour. 
// whenever user click on button, data that is input will be save in local storage.
var saveData1 = localStorage.getItem("9AM")
var saveData2 = localStorage.getItem("10AM")
var saveData3 = localStorage.getItem("11AM")
var saveData4 = localStorage.getItem("12PM")
var saveData5 = localStorage.getItem("1PM")
var saveData6 = localStorage.getItem("2PM")
var saveData7 = localStorage.getItem("3PM")
var saveData8 = localStorage.getItem("4PM")
// these variables stored whatever data is saved to local storage. 
$("#slot-one").text(saveData1)
$("#slot-two").text(saveData2)
$("#slot-three").text(saveData3)
$("#slot-four").text(saveData4)
$("#slot-five").text(saveData5)
$("#slot-six").text(saveData6)
$("#slot-seven").text(saveData7)
$("#slot-eight").text(saveData8)
// Data that is stored will display accordly to where they are inputed. Even when page is being refresh, data will still show.

if (moment().format("h") == document.getElementById("slot-one").name[0] && moment().format("A") == document.getElementById("slot-one").name.slice(1, 3)) {
    (document.getElementById("slot-one").setAttribute("class", "present"))
} else if (moment().format("h") < "9" && moment().format("A") == "AM") {
    (document.getElementById("slot-one").setAttribute("class", "future"))
} else {
    (document.getElementById("slot-one").setAttribute("class", "past"))
}
// statement comparing if the current time is match with the slot's name, color code will execute properly accordingly to how it suppose to be set.
if (moment().format("h") == document.getElementById("slot-two").name.slice(0,2) && moment().format("A") == document.getElementById("slot-two").name.slice(2, 4)) {
    (document.getElementById("slot-two").setAttribute("class", "present"))
} else if (moment().format("h") < "10" && moment().format("A") == document.getElementById("slot-two").name.slice(2, 4)) {
    (document.getElementById("slot-two").setAttribute("class", "future"))
} else {
    (document.getElementById("slot-two").setAttribute("class", "past"))
}
// some code are changed according to how each code is display. Because 10AM have more than one character, a new code is written.
if (moment().format("h") == document.getElementById("slot-three").name.slice(0,2) && moment().format("A") == document.getElementById("slot-three").name.slice(2, 4)) {
    (document.getElementById("slot-three").setAttribute("class", "present"))
} else if (moment().format("h") < "11" && moment().format("A") == document.getElementById("slot-three").name.slice(2, 4)) {
    (document.getElementById("slot-three").setAttribute("class", "future"))
} else {
    (document.getElementById("slot-three").setAttribute("class", "past"))
}

if (moment().format("h") == document.getElementById("slot-four").name.slice(0,2) && moment().format("A") == document.getElementById("slot-four").name.slice(2, 4)) {
    (document.getElementById("slot-four").setAttribute("class", "present"))
} else if (moment().format("h") < "12" && moment().format("A") != document.getElementById("slot-four").name.slice(2, 4)) {
    (document.getElementById("slot-four").setAttribute("class", "future"))
} else {
    (document.getElementById("slot-four").setAttribute("class", "past"))
}
// due to the changing nature of time and how it is written out. The same code won't work properly. new code is being written in here. 
// some of the comparison sign are being switch around to match its purpose. 
if (moment().format("h") == document.getElementById("slot-five").name[0] && moment().format("A") == document.getElementById("slot-five").name.slice(1, 3)) {
    (document.getElementById("slot-five").setAttribute("class", "present"))
} else if (moment().format("h") > "1" && moment().format("A") == document.getElementById("slot-five").name.slice(1, 3)) {
    (document.getElementById("slot-five").setAttribute("class", "past"))
} else {
    (document.getElementById("slot-five").setAttribute("class", "future"))
}

if (moment().format("h") == document.getElementById("slot-six").name[0] && moment().format("A") == document.getElementById("slot-six").name.slice(1, 3)) {
    (document.getElementById("slot-six").setAttribute("class", "present"))
} else if (moment().format("h") > "2" && moment().format("A") == document.getElementById("slot-six").name.slice(1, 3)) {
    (document.getElementById("slot-six").setAttribute("class", "past"))
} else {
    (document.getElementById("slot-six").setAttribute("class", "future"))
}
if (moment().format("h") == document.getElementById("slot-seven").name[0] && moment().format("A") == document.getElementById("slot-seven").name.slice(1, 3)) {
    (document.getElementById("slot-seven").setAttribute("class", "present"))
} else if (moment().format("h") > "3" && moment().format("A") == document.getElementById("slot-seven").name.slice(1, 3)) {
    (document.getElementById("slot-seven").setAttribute("class", "past"))
} else {
    (document.getElementById("slot-seven").setAttribute("class", "future"))
}

if (moment().format("h") == document.getElementById("slot-eight").name[0] && moment().format("A") == document.getElementById("slot-eight").name.slice(1, 3)) {
    (document.getElementById("slot-eight").setAttribute("class", "present"))
} else if (moment().format("h") > "4" && moment().format("A") == document.getElementById("slot-eight").name.slice(1, 3)) {
    (document.getElementById("slot-eight").setAttribute("class", "past"))
} else {
    (document.getElementById("slot-eight").setAttribute("class", "future"))
}
// most of these code are copy and paste with some adjustment to make it work properly. 
