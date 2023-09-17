
const quotes = data

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    const number = Math.floor(Math.random() * quotes.length) // get a random number from 0 to max length
    return quotes[number]
}


/***
 * This function get a quote from the array of quote assuming that 
 * at least quote and author are mandatory
***/
function printQuote() {
    const children = document.getElementById('quote-box').children
    const quote = children[0] // Grabbing first p object

    let q
    do {
        q = getRandomQuote()
    } while (q === quote.value) // get a new random quote whem quote is equal to previous

    quote.innerHTML = q.quote  // clean previous text and add quote

    const info = children[1] // Grabbing second p object, no need to create it
    info.innerHTML = q.author  // clean previous text and add quote

    if (q.citation !== undefined) {
        // Creating a new span citation and adding attributes
        const span = document.createElement('span')
        span.className = 'citation'

        const citation = document.createTextNode(q.citation)
        span.appendChild(citation)

        info.appendChild(span) // Appending span of citation 
    }

    if (q.year !== undefined) {
        // Creating a new span year and adding attributes
        const span = document.createElement('year')
        span.className = 'year'

        const year = document.createTextNode(q.year)
        span.appendChild(year)

        info.appendChild(span) // Appending span of year
    }

}


document.getElementById('load-quote').addEventListener('click', printQuote)