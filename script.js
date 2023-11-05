// api info: https://fsa-crud-2aa9294fe819.herokuapp.com/api/

// Event listener waiting for DOM to load before running code 
document.addEventListener('DOMContentLoaded', () => {
    // Fetch list of parties
    fetchParties();

    // Add event listener to handle form submission
    const form = document.getElementById('new-party-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        addParty(); // Call function to add new party
    });
});

// Function to fetch parties from API and display on page
function fetchParties() {
    // Fetch party data from API
    fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api')
        .then(response => response.json()) // Parses the JSON response
        .then(parties => { }); // To be completed 
}

// Function to add new party
function addParty() {
    // Get user values from form inputs
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    // Send POST request to API to add new party
    // To be completed
}

// Function to delete party
function deleteParty(id) {
    // Send DELETE request to API to remove a party
    // To be completed
}
