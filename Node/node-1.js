async function getCountUsers() {
    return { total: await got.get('https://my-webservice.moveecar.com/users/count') };
  }
  
  // Add total from service with 20
  async function computeResult() {
      // There was an error. We need the promise to resolve.
    const result = await getCountUsers(); // Added await statement. 
    return result.total + 20;
  }
  