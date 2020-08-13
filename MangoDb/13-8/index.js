db.users.insert({
  name: "Ali",
  age: 21,
  add: "Berlin",
  hopis: ["dance", "sleep"],
  emails: {
    private: "me@gmail.com",
    work: "you@mail.com",
  },
  data: Date(),
});
////// new one
db.users.insert({
  name: "Nancy",
  age: 34,
  add: "Paris",
  hopis: ["dance", "sleep"],

  data: Date(),
});
//////// ins many

db.users.insertMany([
  {
    name: "Nancy",
    age: 34,
    add: "Paris",
    hopis: ["dance", "sleep"],

    data: Date(),
  },
  {
    name: "olga",
    age: 30,
    add: "aleppo",
    hopis: ["dance", "sleep"],

    data: Date(),
  },
  {
    name: "ahmad",
    age: 27,
    add: "Dubia",
    hopis: ["dance", "sleep"],

    data: Date(),
  },
]);
// MongoDB today's commands

// To see all Databases you have
// show dbs

// To show the current Database you are working with
// db

// Create new DB || Switch DB
// use newTest

// Drop DB
// db.dropDatabase()

// Create Collection
// db.createCollection('users')

// Show Collections
// show collections

// Insert new row
// To show all rows in Collection
// db.users.find()

// Make it pretty
// db.users.find().pretty()

// Find rows with Criteria
// db.users.find({ add: 'Berlin' })

// Sorting rows
// ascending => Alphabetical order
// db.users.find().sort({ name: 1 }).pretty()
// descending
// db.users.find().sort({ name: -1 }).pretty()

// Delete row with Criteria
// db.users.remove({ name: 'Olga' })
