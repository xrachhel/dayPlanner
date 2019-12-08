$(document).ready(function(){

    console.log(moment())
    console.log(moment().format())

    $("#dateTime").text(moment().format("MMMM Do YYYY h:mm:ss a"))
    
    getTodo()
    $(".save").on("click", function(event){
        event.preventDefault()
       
        var todo = $("#box").val()
        localStorage.setItem("todo", todo)
        getTodo()
    })

    function getTodo(){
        var storedTodos = localStorage.getItem("todo")
        
        $("#box").val(storedTodos) 
    }
//----------------------------------
    getTodoOne()
    $(".save").on("click", function(event){
        event.preventDefault()
       
        var todo = $("#box1").val()
        localStorage.setItem("todo1", todo)
        getTodoOne()
    })

    function getTodoOne(){
        var storedTodos = localStorage.getItem("todo1")
        
        $("#box1").val(storedTodos) 
    }
//----------------------------------
    getTodoTwo()
    $(".save").on("click", function(event){
        event.preventDefault()
       
        var todo = $("#box2").val()
        localStorage.setItem("todo2", todo)
        getTodoOne()
    })

    function getTodoTwo(){
        var storedTodos = localStorage.getItem("todo2")
        
        $("#box2").val(storedTodos) 
    }
//----------------------------------
    getTodoThree()
    $(".save").on("click", function (event) {
        event.preventDefault()

        var todo = $("#box3").val()
        localStorage.setItem("todo3", todo)
        getTodoThree()
    })

    function getTodoThree() {
        var storedTodos = localStorage.getItem("todo3")

        $("#box3").val(storedTodos)
    }
//----------------------------------
    getTodoFour()
    $(".save").on("click", function (event) {
        event.preventDefault()

        var todo = $("#box4").val()
        localStorage.setItem("todo4", todo)
        getTodoFour()
    })

    function getTodoFour() {
        var storedTodos = localStorage.getItem("todo4")

        $("#box4").val(storedTodos)
    }
//----------------------------------
    getTodoFive()
    $(".save").on("click", function (event) {
        event.preventDefault()

        var todo = $("#box5").val()
        localStorage.setItem("todo5", todo)
        getTodoFive()
    })

    function getTodoFive() {
        var storedTodos = localStorage.getItem("todo5")

        $("#box5").val(storedTodos)
    }
//----------------------------------
    getTodoSix()
    $(".save").on("click", function (event) {
        event.preventDefault()

        var todo = $("#box6").val()
        localStorage.setItem("todo6", todo)
        getTodoSix()
    })

    function getTodoSix() {
        var storedTodos = localStorage.getItem("todo6")

        $("#box6").val(storedTodos)
    }
//----------------------------------
    getTodoSeven()
    $(".save").on("click", function (event) {
        event.preventDefault()

        var todo = $("#box7").val()
        localStorage.setItem("todo7", todo)
        getTodoSeven()
    })

    function getTodoSeven() {
        var storedTodos = localStorage.getItem("todo7")

        $("#box7").val(storedTodos)
    }
//----------------------------------
    getTodoEight()
    $(".save").on("click", function (event) {
        event.preventDefault()

        var todo = $("#box8").val()
        localStorage.setItem("todo8", todo)
        getTodoEight()
    })

    function getTodoEight() {
        var storedTodos = localStorage.getItem("todo8")

        $("#box8").val(storedTodos)
    }

    

    































})