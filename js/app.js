const tvSearchForm = document.querySelector('#tv-search-form')
const resetBtn = document.querySelector('#reset-btn')

// listen for submit even on form
tvSearchForm.addEventListener('submit', async function (e) {
    e.preventDefault()
    const searchResult = tvSearchForm.elements.query.value;

    // returns object with data property (an array of tv objects)
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchResult.trim()}`)

    // display data array which contains tv shows 
    displayImages(result.data)
    resetSearchForm()
})

resetBtn.addEventListener('click', () => clearImageResults())

const displayImages = shows => {
    // iterate through shows and pull out images if they exist
    for (let tvShow of shows) {
        // take show (object) and target image properties 
        if (tvShow.show.image) {
            // create a new image element and set source equal to tv show image
            const img = document.createElement('img')
            const divShows = document.querySelector('#shows')
            img.src = tvShow.show.image.medium
            // add show to show list in body 
            divShows.append(img)
        }
    }
}

// reset field after query
const resetSearchForm = () => tvSearchForm.elements.query.value = ''

// clear previous search images
const clearImageResults = () => {
    const divShows = document.querySelector('#shows')
    if (divShows.innerHTML === '' || divShows.innerHTML === ' ') {
        alert("There's no TV Art to clear");
    }
    divShows.innerHTML = ''
}