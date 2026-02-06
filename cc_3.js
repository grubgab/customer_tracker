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


customers.push({
  name: "Harry P. Ness",
  email: "harry.ness@gmail.com",
  purchases: ["Tablet", "Stylus"]
});


customers.shift();


customers[0].email = "mike.ock.new_email@gmail.com";

customers[0].purchases.push("Wireless Charger");


customers.forEach(function(customer) {
  console.log(
    `Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`
  );
});
