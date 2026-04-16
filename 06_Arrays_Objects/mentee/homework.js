// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

let contacts = [
    { name: "Obi" , phone: "7551211936", isFavorite: true },
    { name:"Snoopy", phone: "7555502517", isFavorite: true},
];

console.log(contacts);


// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

// STEP 3: Log the total number of contacts.
console.log(contacts.length);
// STEP 4: Log the name of the first contact.
console.log(contacts[0].name);
// STEP 5: Update one contact’s isFavorite value.
contacts[1].isFavorite = false;
console.log(contacts[1]);
// STEP 6: Add (push) a new contact object.

contacts.push({ name: "tobogan", phone: "7551140029", isFavorite: false });

console.log(contacts);

// STEP 7: Log the updated contacts array.
