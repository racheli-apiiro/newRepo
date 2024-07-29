// This is a hardcoded secret key (for demonstration purposes only)
const API_KEY = '12345-ABCDE';

document.getElementById('myButton').addEventListener('click', function() {
    fetchData();
});

function fetchData() {
    const apiUrl = `https://api.example.com/data?apiKey=${API_KEY}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = 'Data fetched successfully!';
            console.log(data); // For demonstration purposes
        })
        .catch(error => {
            document.getElementById('message').textContent = 'Error fetching data';
            console.error('Error:', error);
        });
}
