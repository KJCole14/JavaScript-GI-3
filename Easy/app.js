//EASY: Write a function that would allow you to do this:

// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: running"

function activity(exercise) {
    if (exercise === "running") {
        console.log("Today's exercise: " + exercise);
    } else if (exercise === "swimming") {
        console.log("Today's exercise: " + exercise);
    }
    
}

activity("swimming");