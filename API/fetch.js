// Define the URL you want to fetch data from
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

// Use the Fetch API to make a GET request
fetch(url)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Work with the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });
