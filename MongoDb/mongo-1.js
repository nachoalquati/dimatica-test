
let searchString = '';
// The incoming text

function getSixMonthsAgoDate(date) {
    let currentDate = date;
    let sixMonthsAgo = new Date (currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() -6)
    return sixMonthsAgo
}
// Function to get the needed date. Also reusable.

let query = {
    $or: [
        { email: searchText },
        { first_name: {
            $regex: `^${searchText}`,
            $options: 'i' 
        }},
        { last_name:  { 
            $regex: `^${searchText}`, 
            $options: 'i' 
        }}
    ],
    last_connection_date: {
        $gte: getSixMonthsAgoDate(new Date())
    }
}
// Query with $or operator and $gte operator

db.users.find(query)

// To improve the speed we could create an index for each field we are going to use.
db.users.createIndex(
    { 
        email: 1, 
        first_name: 1, 
        last_name: 1, 
        last_connection_date: 1 
    }
);
