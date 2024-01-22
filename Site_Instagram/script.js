let time = 1000,
    currentlmagelndex = 0,
    Images = document.querySelectorAll("#phones img")
    max = Images.length;

    function nextlmage() {

        Images[currentlmagelndex].classList.remove("selected")

        currentlmagelndex++

        if(currentlmagelndex >= max)
        currentlmagelndex=0

        Images [currentlmagelndex].classList.add("selected")
        

    }
    
    function start(){
        window.addEventListener(" load", start)
    }