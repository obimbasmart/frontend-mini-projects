
function getRating() {
    console.log("clicked")
    ratings = document.getElementsByTagName("input")
    for (var i = 0; i < ratings.length; i++) {
        if (ratings[i].type === "radio" && ratings[i].checked) {
            localStorage.setItem("rating", ratings[i].value)
        }
    }
}
