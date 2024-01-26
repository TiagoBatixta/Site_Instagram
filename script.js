let time = 2000,
    currentlmagelndex = 0,
    images = document.querySelectorAll("#phones img")
    max = images.length;

function nextlmage() {

    console.log(images[2])

    // images[currentlmagelndex]
    //     .classList.remove("selected")
    
    //     currentlmagelndex++
    
    // if (currentlmagelndex >= max)
    //     currentlmagelndex = 0
    
    // images[currentlmagelndex]
    //     .classList.add("selected")
}

function start() {
    setInterval(() => {
        nextlmage()
    }, time)
}
window.addEventListener("load", start)