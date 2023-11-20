async function getTotalVehicles() {
    try {
        const response = await got.get('https://my-webservice.moveecar.com/vehicles/total');
        return  JSON.parse(response)
    } catch (error) {
        console.log(error);
    }

}

async function getPlurial() {
    //The error was that the function would throw an error because
    //the total variable was being called before the promise was resolved. 
    let total = await  getTotalVehicles(); //Add the await statement.
    if (total <= 0) {
        return 'none';
    }
    if (total <= 10) {
        return 'few';
    }
    return 'many';
}
