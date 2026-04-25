// ARRAY METHODS HOMEWORK – MINI TASK LIST
// ------------------------------------------------------
// GOAL: Manage a small task list using array methods and log changes
//       to the console.

// STEP 1: Create an array called tasks that starts with 3 task strings.
//         Example:
//         "Study JavaScript", "Drink water", "Go for a walk"

let tasks = ["Feed Snoopy", "Kiss Obi", "Ignore Lola"];

// STEP 2: Use console.log to show the initial tasks array.

console.log(tasks);


// STEP 3: Use .push() to add a new task to the end,
//         then log the tasks array again.

tasks.push("Pet Pinguica");

console.log(tasks);


// STEP 4: Use .unshift() to add a "priority" task at the beginning,
//         then log the tasks array again.

tasks.unshift("Walk Tobogan");

console.log(tasks);



// STEP 5: Use .pop() to remove the last task.
//         Save the removed task in a variable called removedTask.
//         Log a message that shows which task was removed.

let removeTask = tasks.pop();

console.log(`this task has being removed ${removeTask}`);

console.log(tasks);


// STEP 6: Use .forEach() to log each remaining task with a number,
//         for example:
//         "1. Study JavaScript"
//         "2. Drink water"
//         etc.

tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`)
});




// STEP 7: Use .filter() to create a new array called longTasks
//         that only keeps tasks with a length greater than 15 characters.
//         (task.length > 15)

const snoopy = ["eat snoopy", "take snoopy to the park and let him run", "kiss snoopy", "sleep with snoopy and hug him all night", "let snoopy eat all the food he wants", "Watch Snoopy"];

const longTasks = snoopy.filter((snoop) => {
    return snoop.length > 15
});



// STEP 8: Log longTasks to see which tasks were kept.

console.log(longTasks);

// STEP 9: Use .map() to create a new array called upperTasks.
//         Convert every task into uppercase text.
//         Then log upperTasks.



// const upperSnoopy = snoopy.map((uSnoopy) =>{
//     return uSnoopy.toUpperCase()
// });

// console.log(upperSnoopy);



const upperSnoopy = longTasks.map((longSnoopy) =>{
    return longSnoopy.toUpperCase()
});

console.log(upperSnoopy);


// STEP 10: Use .reduce() to calculate the TOTAL number of characters
//          across all tasks.

//          Create a variable called totalCharacters.

//          The reduce logic should:
//          - start from 0
//          - add each task.length to the running total

//          Finally log:
//          "Total characters across all tasks: ___"

let totalCharacters = longTasks.reduce((acumulator, longTask) => {
    return acumulator + longTask.length
}, 0)

console.log(`Total characters across all tasks: ${totalCharacters}`);