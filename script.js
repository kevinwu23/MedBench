document.addEventListener("DOMContentLoaded", function() {
    fetch('https://kevinwu23.github.io/citations.csv')
        .then(response => response.text())
        .then(data => {
            // Parse the CSV data to get the URL
            let lines = data.split("\n");
            // Assuming URL is on the first line of the CSV
            let url = lines[0].trim();

            // Set the URL to the iframe's src attribute
            document.getElementById("contentFrame").src = url;
        })
        .catch(error => console.error('Error fetching the CSV:', error));
});
