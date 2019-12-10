# dayPlanner

For this homework, we had to create a calendar application that allows users to save events for each hour of the workday, and save it so that it appears even if the page is refreshed. The application tells the user the current date at the very top, and each hour is color coded to reflect what time of day it is. Grey represents time that has passed, red represents the current time, and green respresents future time. 
## Screenshot 
![site](screenshot.png)

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): used for structuring and creating elements on the DOM
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): used to style html elements on the page
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): used to create responsive, interactive elements on the page
* [Jquery] (https://jquery.com/)
* [Moment.js] (https://momentjs.com/)

## Deployed Link

* [See Live Site](https://xrachhel.github.io/dayPlanner/)


## Authors

Rachel Yeung 

- [Link to Portfolio Site](https://xrachhel.github.io/interactivePortfolio/)
- [Link to Github](https://github.com/xrachhel/dayPlanner)
- [Link to LinkedIn](https://www.linkedin.com/)

## Code snippet 
```html
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
```
This was the function i used to set the color of the input boxes based on the time of day. I created an array of the 'hour' in military time, which were the ids i had set for each individual input box in my HTML code. I created the function currentTime(), which would control the background colors of the input boxes. I set a variable 'current' as the current time and set it equal to the current time in military time in hours (this was done using moment.js). I then created a for loop that would iterate through the array i created earlier. I then created 3 conditional statements, comparing the 'time' in my array with the current hour. Since my array consisted of strings, i had to parseInt() them to make sure that they were interpreted as integers. Inside my conditional statement, i grabbed the input box using the Id, and attributed a background color based on whichever condition it met. 