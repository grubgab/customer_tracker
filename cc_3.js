// Create customer records
let customers = [
  {
    name: "Ben Dover",
    email: "ben.dover@gmail.com",
    purchases: ["Laptop", "Mouse", "Keyboard"]
  },
  {
    name: "Mike Ock",
    email: "mike.ock@gmail.com",
    purchases: ["Phone Case", "Screen Protector"]
  },
  {
    name: "Amanda Huggenkiss",
    email: "amanda.huggenkiss@gmail.com",
    purchases: ["Headphones", "Charger"]
  }
];

// Add a new customer
customers.push({
  name: "Harry P. Ness",
  email: "harry.ness@gmail.com",
  purchases: ["Tablet", "Stylus"]
});

// Remove the first customer
customers.shift();

