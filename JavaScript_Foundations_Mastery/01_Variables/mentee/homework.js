// VARIABLES HOMEWORK – PROFILE CARD
// -------------------------------------------------
// GOAL: Create a fake "profile card" using only variables and console.log.
// Open DevTools → Console to see your results.

// STEP 1: Create a variable called fullName (string) with your full name.
const fullName = "jorge Aburto";
// STEP 2: Create a variable called profileAge (number) with your age.
const profileAge = 25;
// STEP 3: Create a variable called country (string) with the country you live in.
const profileCountry = ("mexico");
// STEP 4: Create a variable called favoriteHobby (string) with a hobby you enjoy.
let favoriteHobby = ("surfing");
// STEP 5: Create a variable called isStudent (boolean) with true or false,
//         depending on whether you consider yourself a student right now.
const isStundent = true;

// STEP 6: Use console.log to print the profile in a clear format, for example:
//         --- PROFILE CARD ---
//         Name: (your name)
//         Age: (your age)
//         Country: (your country)
//         Hobby: (your hobby)
//         Is student? (true/false)
console.log(` Name: ${fullName}\n Age: ${profileAge} \n Country: ${profileCountry} \n Hobby: ${favoriteHobby} \n Is student? ${isStundent}`);
// STEP 7: Change at least ONE of your variables (for example, favoriteHobby)
//         to a new value and then log the entire profile card again
//         to show the updated information.

favoriteHobby = ("Gaming");
console.log(` --- PROFILE CARD --- \n Name: ${fullName}\n Age: ${profileAge} \n Country: ${profileCountry} \n Hobby: ${favoriteHobby} \n Is student? ${isStundent}`);

const hobbies = ["Gaming", "Surfing"];

console.log(` --- PROFILE CARD --- \n Name: ${fullName}\n Age: ${profileAge} \n Country: ${profileCountry} \n Hobby: ${hobbies} \n Is student? ${isStundent}`);

hobbies.push("Working out");

console.log(` --- PROFILE CARD --- \n Name: ${fullName}\n Age: ${profileAge} \n Country: ${profileCountry} \n Hobby: ${hobbies} \n Is student? ${isStundent}`);


console.log(` --- PROFILE CARD --- 
    Name: ${fullName}
    Age: ${profileAge} 
    Country: ${profileCountry} 
    Hobby: ${hobbies} 
    Is student? ${isStundent}`);