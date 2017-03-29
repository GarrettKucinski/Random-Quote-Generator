"use strict"; // no monkey business

// Array of objects containing quote data
var quotes = [{
            'quote': 'Do or do not, there is no try.',
            'source': 'Master Yoda',
            'citation': 'Empire Strikes Back',
            'year': ''
        },
        {
            'quote': 'I am your father!',
            'source': 'Darth Vader',
            'citation': 'Return of the Jedi',
            'year': ''
        },
        {
            'quote': 'These aren\'t the droids you\'re looking for. He can go about his business. Move along.',
            'source': 'Obi Wan Kenobi',
            'citation': 'A New Hope',
            'year': '1975'
        },
        {
            'quote': 'Be the change you wish to see in the world.',
            'source': 'Ghandi',
            'citation': '',
            'year': ''
        },
        {
            'quote': 'You have to be odd, to be number one',
            'source': 'Dr. Seuss',
            'citation': '',
            'year': ''
        },
        {
            'quote': 'Why be moody when you can shake you\'re booty!',
            'source': 'Pinterest',
            'citation': '',
            'year': 'unknown'
        },
        {
            'quote': 'A negative mind will never give you a positive life.',
            'source': 'Pinterest',
            'citation': '',
            'year': ''
        },
        {
            'quote': 'You will never fail until you stop trying.',
            'source': 'Albert Einstein',
            'citation': '',
            'year': ''
        },
    ],

    quoteIndex,
    randomQuote,
    uniqueQuotes = quotes.slice(), // Make a copy of the quotes array to work with
    quoteBox = document.getElementById('quote-box'), // Containe the "quote-box" element

    // Set up a default quote object to insert when uniqueQuotes is empty 
    // ( see getRandomQuote function )
    defaultQuote = {
        'quote': 'You can do anything but not everything',
        'source': 'David Allen',
        'citation': 'Making It All Work',
        'year': '2009'
    };


// function using random method of Math object to get a random quote from our quotes object
function getRandomQuote() {

    // If the uniqueQuotes array is empty, recopy the quotes array and fill it back up
    if (!uniqueQuotes.length) {

        // To bridge the gap, populate the html with a default quote so that the button
        // can't be clicked twice without the quote changing
        randomQuote = defaultQuote;

        // Copy the quotes array for manipulation with our script
        uniqueQuotes = quotes.slice();

    } else {
        // If the uniqueQuotes array has quotes in it pick one at random
        quoteIndex = Math.floor((Math.random() * uniqueQuotes.length));
        randomQuote = uniqueQuotes[quoteIndex];

        // Remove the selected quote from the array
        uniqueQuotes.splice(quoteIndex, 1);
    }

    // Return the randomly selected quote for insertion into our markup
    return randomQuote;
}

function printQuote() {

    // Set up variables to hold quote data
    var currentQuote = getRandomQuote(),
        quoteText = currentQuote.quote, // quote text
        quoteSource = currentQuote.source, // quote source
        quoteCitation = currentQuote.citation, // quote citation
        quoteYear = currentQuote.year; // quote year

    // Generate quote box markup
    var quoteString = '<p class="quote">' + quoteText + '</p>' +
        '<p class="source">' + quoteSource; // opening p tag for quote source

    if (quoteCitation) {
        quoteString += '<span class="citation">' + quoteCitation + '</span>';
    } // if a citation exists create the markup, if not leave it out
    if (quoteYear) {
        quoteString += '<span class="citation">' + quoteYear + '</span>';
    } // if a year exists create the markup, if not leave it out

    quoteString += '</p>'; // close the quote source p tag 

    quoteBox.innerHTML = quoteString; // set "quote-box" inner html to generated markup on calling printQuote()
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById("loadQuote").addEventListener("click", printQuote, false);