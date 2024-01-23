fetch('https://www.wikipedia.org/')
.then( res => res.text() )
.then(html => {
    document.open()
    document.write(html)
    document.close()
})

