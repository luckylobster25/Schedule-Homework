
setInterval(function(){
    var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDay)
},0) // time is set to 0 so current day is display right away. 
function save() {
    localStorage.setItem(document.getElementById("slot-one").name, document.getElementById("slot-one").value)
} 
var saveData = localStorage.getItem("9am")
$("#slot-one").text(saveData)