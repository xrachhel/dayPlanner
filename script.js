$(document).ready(function(){

    console.log(moment())
    console.log(moment().format())

    $("#dateTime").text(moment().format("MMMM Do YYYY"))
    
    getTodo()
    $(".saveBtn").on("click", function(event){
        event.preventDefault()
       
        var todo = $("#9").val()
        localStorage.setItem("todo", todo)
        getTodo()
    })

    function getTodo(){
        var storedTodos = localStorage.getItem("todo")
        
        $("#9").val(storedTodos) 
    }
//----------------------------------
    getTodoOne()
    $(".saveBtn").on("click", function(event){
        event.preventDefault()
       
        var todo = $("#10").val()
        localStorage.setItem("todo1", todo)
        getTodoOne()
    })

    function getTodoOne(){
        var storedTodos = localStorage.getItem("todo1")
        
        $("#10").val(storedTodos) 
    }
//----------------------------------
    getTodoTwo()
    $(".saveBtn").on("click", function(event){
        event.preventDefault()
       
        var todo = $("#11").val()
        localStorage.setItem("todo2", todo)
        getTodoOne()
    })

    function getTodoTwo(){
        var storedTodos = localStorage.getItem("todo2")
        
        $("#11").val(storedTodos) 
    }
//----------------------------------
    getTodoThree()
    $(".saveBtn").on("click", function (event) {
        event.preventDefault()

        var todo = $("#12").val()
        localStorage.setItem("todo3", todo)
        getTodoThree()
    })

    function getTodoThree() {
        var storedTodos = localStorage.getItem("todo3")

        $("#12").val(storedTodos)
    }
//----------------------------------
    getTodoFour()
    $(".saveBtn").on("click", function (event) {
        event.preventDefault()

        var todo = $("#13").val()
        localStorage.setItem("todo4", todo)
        getTodoFour()
    })

    function getTodoFour() {
        var storedTodos = localStorage.getItem("todo4")

        $("#13").val(storedTodos)
    }
//----------------------------------
    getTodoFive()
    $(".saveBtn").on("click", function (event) {
        event.preventDefault()

        var todo = $("#14").val()
        localStorage.setItem("todo5", todo)
        getTodoFive()
    })

    function getTodoFive() {
        var storedTodos = localStorage.getItem("todo5")

        $("#14").val(storedTodos)
    }
//----------------------------------
    getTodoSix()
    $(".saveBtn").on("click", function (event) {
        event.preventDefault()

        var todo = $("#15").val()
        localStorage.setItem("todo6", todo)
        getTodoSix()
    })

    function getTodoSix() {
        var storedTodos = localStorage.getItem("todo6")

        $("#15").val(storedTodos)
    }
//----------------------------------
    getTodoSeven()
    $(".saveBtn").on("click", function (event) {
        event.preventDefault()

        var todo = $("#16").val()
        localStorage.setItem("todo7", todo)
        getTodoSeven()
    })

    function getTodoSeven() {
        var storedTodos = localStorage.getItem("todo7")

        $("#16").val(storedTodos)
    }
//----------------------------------
    getTodoEight()
    $(".saveBtn").on("click", function (event) {
        event.preventDefault()

        var todo = $("#17").val()
        localStorage.setItem("todo8", todo)
        getTodoEight()
    })

    function getTodoEight() {
        var storedTodos = localStorage.getItem("todo8")

        $("#17").val(storedTodos)
    }

    
var time = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
    
function currentTime(){
    var current = moment().format("H")
    for (var i = 0; i < time.length; i++){
    if(parseInt(time[i]) > current){
        $("#" + time[i]).attr("style", "background-color: green")
    }
    else if(parseInt(time[i]) == current){
        $("#" + time[i]).attr("style", "background-color: red")
    }
    else if(parseInt(time[i]) < current){
        $("#" + time[i]).attr("style", "background-color: grey")
    }
    }
}
currentTime()






























})