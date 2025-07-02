// Initial Queue Setup with 5 customers
let customerQueue = ["Mikha", "Aiah", "Maloi", "Collet", "Jhoana", "Stacy", "Sheena", "Gwen"];

console.log("Initial Customer Queue:");
console.log(customerQueue);

// Ask new customer to enter name
let newCustomer = prompt("Enter your name to join the queue:");
customerQueue.push(newCustomer);  // Add customer to queue

let customerNumber = customerQueue.length; // Position is index + 1
alert("You are customer number " + customerNumber);
console.log("Updated Queue after adding new customer:");
console.log(customerQueue);

// Keep servicing customers until queue is empty
while (customerQueue.length > 0) {
    let serviceNumber = prompt("Enter customer number to service (1 to " + customerQueue.length + "):");
    serviceNumber = parseInt(serviceNumber) - 1;  // Convert to index

    if (serviceNumber >= 0 && serviceNumber < customerQueue.length) {
        let servedCustomer = customerQueue[serviceNumber];
        alert("Now serving: " + servedCustomer);

        // Remove served customer
        customerQueue.splice(serviceNumber, 1);

        console.log("Updated Queue:");
        console.log(customerQueue);
    } else {
        alert("Invalid number. Please try again.");
    }

    // Check if queue is empty
    if (customerQueue.length === 0) {
        alert("All customers have been served.");
    }
}

