const quotes = {
    science: [
        "Knowledge is power.",
        "May the Force be with you.",
        "The most important thing is to never stop questioning."
    ],
    motivational: [
        "The most important thing is to never stop questioning.",
        "Life has got all those twists and turns.",
        "Keep your face always toward the sunshine, and shadows will fall behind you."
    ],
    religious: [
        "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
        "The essence of Hinduism is that the path may be different, but the goal is the same.",
        "You are what you believe in. You become that which you believe you can become."
    ],
};

const categories = Object.keys(quotes);
const categoryDropdown = document.getElementById("category");
const quoteDisplay = document.getElementById("quote");
const nextButton = document.getElementById("nextBtn");
const previousButton = document.getElementById("previousBtn");
const randomButton = document.getElementById("randomBtn");
const checkbox = document.getElementById("checkbox");

let currentCategory = categoryDropdown.value;
let currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);


checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

function updateQuote() {
    quoteDisplay.classList.add("fade-out");
    setTimeout(() => {
        quoteDisplay.textContent = quotes[currentCategory][currentQuoteIndex];
        quoteDisplay.classList.remove("fade-out");
        quoteDisplay.classList.add("fade-in");
    }, 300); 
}


function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    updateQuote();
}


function previousQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    updateQuote();
}


function randomQuote() {
    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    currentCategory = categories[randomCategoryIndex];

    
    categoryDropdown.value = currentCategory;

    
    currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);

    updateQuote();
}


categoryDropdown.addEventListener("change", () => {
    currentCategory = categoryDropdown.value;
    currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length); 
    updateQuote();
});


updateQuote();


nextButton.addEventListener("click", nextQuote);
previousButton.addEventListener("click", previousQuote);
randomButton.addEventListener("click", randomQuote);
