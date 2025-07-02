// Simple Queueing System using Hash Function
// For 5 Customers: Elaine, Althea, Angelo, Lito, Engelbert

// --- Function to Hash a Name ---
function simpleHash(name) {
  let total = 0;
  for (let i = 0; i < name.length; i++) {
    total += name.charCodeAt(i); // Add ASCII value of each character
  }
  return total % 5; // Return index between 0-4
}

// --- Initialize the Hash Table ---
let hashTable = new Array(7); // Only 7 customers

// --- Step 1: Input 5 Customer Names ---
for (let i = 0; i < 5; i++) {
  let name = prompt("Enter your name (Customer " + (i + 1) + "):");

  let index = simpleHash(name); // Get index from hash function

  // Handle collision: find next empty spot using linear probing
  while (hashTable[index] !== undefined) {
    index = (index + 1) % 5;
  }

  hashTable[index] = name; // Store name in hash table

  alert("Hello " + name + "! Your queue number is: " + (index + 1));
}

// --- Step 2: Show Initial Hash Table ---
console.log("Initial Hashed Customer Queue:");
for (let i = 0; i < hashTable.length; i++) {
  console.log("Slot " + (i + 1) + ": " + (hashTable[i] || "Empty"));
}

// --- Step 3: Start Servicing Customers ---
let serviceAgain = true;

while (serviceAgain) {
  let numberToService = prompt("Enter the queue number to be serviced (1 to 5):");
  let index = parseInt(numberToService) - 1; // Adjust to 0-based index

  if (hashTable[index]) {
    alert("Now serving: " + hashTable[index]);
    hashTable[index] = undefined; // Remove the customer after service
  } else {
    alert("No customer found at that number.");
  }

  // Show updated hash table after each service
  console.log("Updated Hashed Customer Queue:");
  for (let i = 0; i < hashTable.length; i++) {
    console.log("Slot " + (i + 1) + ": " + (hashTable[i] || "Empty"));
  }

  // Ask if user wants to continue servicing
  let again = prompt("Do you want to service another customer? (yes/no):").toLowerCase();
  if (again !== "yes") {
    serviceAgain = false;
    alert("End of customer queue. Have a nice day!");
  }
}
