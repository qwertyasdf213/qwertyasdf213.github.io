const button = document.getElementById('clickBtn');
const paragraph = document.getElementById('text');

button.addEventListener('click', function() {
    paragraph.textContent = 'You clicked the button!';
});
