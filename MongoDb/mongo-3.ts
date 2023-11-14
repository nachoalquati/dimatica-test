import db from "@db"


interface users {
    email: string;
    first_name: string;
    last_name: string;
    roles: string[];
    last_connection_date: Date;
    addresses: {
        zip: number;
        city: string;
    }[];
  }
  // To remind me the schema.

db.collection('users').updateOne(

    { _id: ObjectId("5cd96d3ed5d3e20029627d4a") },
    // I transform the string into a mongo ID.
    { $set: {
    // Update the last connection to the current day.
         last_connection_date: new Date() 
    }}

);

db.users.updateOne(
    { _id: ObjectId("5cd96d3ed5d3e20029627d4a") },
    // Transform the string into a mongo ID.
    { $addToSet: { roles: "admin" } }
    // Add a new role to the roles set.
  );



  db.users.updateOne(
    { _id: ObjectId("5cd96d3ed5d3e20029627d4a"), "addresses.zip": 75001 },
    // Search with the id and the addresses.zip
    {
      $set: {
        "addresses.$.city": "Paris 1"
      }
      // Replace the city with Paris 1
    }
  );