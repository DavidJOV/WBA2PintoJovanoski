 
 
 
 const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCjUYojtw3cBQKz36rfdHKhq1XcCZMTQT0',
  Promise: Promise
  });
  

  googleMapsClient.geocode({address: "f21f13iasdiüü"})
    .asPromise()
    .then((response) => {
      console.log(response.json.results);
    })
    .catch((err) => {
      console.log(err);
    });