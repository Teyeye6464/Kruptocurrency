// script.js
const startExchangeButton = document.getElementById('start-exchange');
const learnMoreButton = document.getElementById('learn-more');
const exchangeCurrenciesButton = document.getElementById('exchange-currencies');

startExchangeButton.addEventListener('click', () => {
    // Add functionality for starting the exchange
});

learnMoreButton.addEventListener('click', () => {
    // Add functionality for learning more
});

exchangeCurrenciesButton.addEventListener('click', () => {
    // Add functionality for exchanging currencies
});
// script.js
const learnMoreButton = document.getElementById('learn-more');

learnMoreButton.addEventListener('click', () => {
    // Add functionality for learning more
});
// script.js
const exchangeCurrenciesButton = document.getElementById('exchange-currencies');

exchangeCurrenciesButton.addEventListener('click', () => {
    // Add functionality for exchanging currencies
});
// script.js
const faqLinks = document.querySelectorAll('a[href^="#faq-"]');

faqLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        // Add functionality for FAQ links
    });
});
