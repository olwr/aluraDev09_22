/* get the values */
function calculateFinalGrade() {
    var assignment1 = parseFloat(document.getElementById("assignment1").value);
    var assignment2 = parseFloat(document.getElementById("assignment2").value);
    var assignment3 = parseFloat(document.getElementById("assignment3").value);
    var exam = parseFloat(document.getElementById("final-exam").value);
    
    /* calculate */
    var average = (assignment1 + assignment2 + assignment3 + exam) / 4;
    var finalGrade = average.toFixed(1);

    /* display grade in the page */
    if (average >= 6) {
        document.getElementById("result").innerHTML = "Passed with the grade " + finalGrade
    }
    else {
        document.getElementById("result").innerHTML = "Failed with the grade " + finalGrade
    }
    event.preventDefault(); /* prevents the page from reloading */
}
