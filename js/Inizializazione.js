// nav e footer
$.get('templates/footer.html', function (data){
    $('#footer-placeolder').replaceWith(data)
})
$.get('templates/navigation.html', function (data){
    $('#nav-placeolder').replaceWith(data)
})


// Creare inizializazione per organizazione js 

$(function () {
    loadScript('js/products.js', productsSetup)
    loadScript('js/categories.js', categoriesSetup)
})

function categoriesSetup() {
    let categories = new Categories()
    categories.getAllCategories()
    categories.getSingleCategory("jewelery")

}

function productsSetup() {
    console.log("products here")
}

function loadScript(url, callback) {
    let head = document.head
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.onreadystatechange = callback
    script.onload = callback
    head.appendChild(script)
}




