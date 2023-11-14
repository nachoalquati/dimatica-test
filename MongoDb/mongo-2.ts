import db from "@db"

interface users  {
    email: string;
    first_name: string;
    last_name: string;
    roles: string[];
    last_connection_date: Date;
}
 // To remind me the schema


db.users.aggregate([
    {
        //Group by roles and push every user email that fits that role
      $group: {
        _id: "$roles",
        users: { $push: "$email" }
      }
    },
    {
        // Don't show the id because its irrelevant.
        // Show each array of user emails with the role.
      $project: {
        _id: 0,
        role: "$_id",
        users: 1
      }
    }
  ]);

  // Output should look like this.
  // { role: ["role1"], users: [1@test.com, "2@test.com"]}
  // { role: ["role2"], users: [4@test.com, "5@test.com"]}