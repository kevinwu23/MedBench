document.addEventListener('DOMContentLoaded', function() {
    loadData();
});

function loadData() {
    // Use AJAX or Fetch API to load CSV data
    // Randomly select a row and update statement and iframe src
    // Example:
    document.getElementById('statement').innerText = 'Sample Statement';
    document.getElementById('contentFrame').src = 'https://example.com';
}

document.getElementById('saveButton').addEventListener('click', function() {
    var statement = document.getElementById('statement').innerText;
    var containsCitation = document.getElementById('citationCheck').checked;
    var notes = document.getElementById('notes').value;

    // Code to save these values to another CSV
    // You might need a server-side script to handle file operations
});
