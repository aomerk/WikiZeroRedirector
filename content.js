
[...document.getElementsByTagName("a")].forEach(elem => {
    elem.href = elem.href.replace("wikipedia", "0wikipedia")
})