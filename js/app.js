const tvSearchForm = document.querySelector('#tv-search-form')

// listen for submit even on form
tvSearchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(tvSearchForm.elements.query.value)
})
