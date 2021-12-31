
setInterval(function(){
    var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDay)
},0)