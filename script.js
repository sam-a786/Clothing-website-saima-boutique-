// Get the button element by its ID
var myButton = document.getElementById("myButton");

// Add a click event listener to the button
myButton.addEventListener("click", function () {
    // Display an alert when the button is clicked
    alert("Button clicked!");

    // Function to simulate fetching clothing data from the database
    function getClothingData() {
        // Fetch clothing data from the database
        fetch('http://localhost:5500/clothing')
            .then(response => response.json())
            .then(data => {
                // Update the webpage with clothing data
                displayClothingItems(data, 'clothing-container');
            })
            .catch(error => console.error('Error fetching clothing data:', error));
        return [
            { name: 'T-Shirt', size: 'Medium', description: 'Comfortable cotton T-shirt', image_url: 'https://example.com/tshirt.jpg' },
            // Add more items as needed
        ];
    }

    // Function to display clothing items on the webpage
    function displayClothingItems(items, containerId) {
        var container = document.getElementById(containerId);
        container.innerHTML = '';

        items.forEach(item => {
            var itemElement = document.createElement('div');
            itemElement.className = 'product';

            itemElement.innerHTML = `<h3>${item.name}</h3>
                                    <p>${item.description}</p>
                                    ${item.size ? `<p>Size: ${item.size}</p>` : ''}
                                    <img src="${item.image_url}" alt="${item.name}">`;

            container.appendChild(itemElement);
        });
    }

    // Fetch jewelry data from the server
    fetch('http://localhost:5500/jewelry')  // Update the port to 5500
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
    }
});
