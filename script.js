// Get the button element by its ID
var myButton = document.getElementById("myButton");

// Add a click event listener to the button
myButton.addEventListener("click", function() {
    // Display an alert when the button is clicked
    alert("Button clicked!");

// Fetch clothing data from the server
fetch('http://localhost:3000/clothing')
    .then(response => response.json())
    .then(data => {
        // Update the webpage with clothing data
        displayItems(data, 'clothing-container');
    })
    .catch(error => console.error('Error fetching clothing data:', error));

// Fetch jewelry data from the server
fetch('http://localhost:3000/jewelry')
    .then(response => response.json())
    .then(data => {
        // Update the webpage with jewelry data
        displayItems(data, 'jewelry-container');
    })
    .catch(error => console.error('Error fetching jewelry data:', error));

// Function to display items on the webpage
function displayItems(items, containerId) {
    // Get the container element by its ID
    var container = document.getElementById(containerId);

    // Clear existing content in the container
    container.innerHTML = '';

    // Loop through the items and create HTML elements
    items.forEach(item => {
        var itemElement = document.createElement('div');
        itemElement.innerHTML = `<h3>${item.name}</h3>
                                <p>${item.description}</p>
                                ${item.size ? `<p>Size: ${item.size}</p>` : ''}
                                <img src="${item.image_url}" alt="${item.name}">`;

        // Append the item element to the container
        container.appendChild(itemElement);
    });
}});
