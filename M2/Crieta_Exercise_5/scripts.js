const quoteDisplay = document.getElementById('quoteDisplay');
const author = document.getElementById('author');
const button = document.getElementById('quoteButton');

function getQuote() {
    quoteDisplay.textContent = 'Loading quote...';
    author.textContent = '';

    fetch('https://api.quotable.io/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            quoteDisplay.textContent = `"${data.content}"`;
            author.textContent = `- ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteDisplay.textContent = 'Failed to load quote. Please try again.';
            author.textContent = '';
        });
}

button.addEventListener('click', getQuote);

getQuote();
