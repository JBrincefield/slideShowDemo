console.log("js has Loaded")

//0, 1, 2
let imageURLs = [
    "./images/bullDog1.jpg",
    "./images/bullDog2.jpg",
    "./images/bullDog3.jpg"
]

//replace the 1st image with the 2nd image?
//replace the 2st image with the 3nd image
//When we run out of images, start back at first?

const slideShowImage = document.getElementById('slide-show-image')
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')

nextButton.addEventListener("click", () => {
    updateImage(Next)
})

prevButton.addEventListener("click", () => {
    updateImage(Previous)
})
//Use set intervale to update the image every 3 seconds
let currentImageIndex = 0

//Move to the next image
//update the DOM to show it
//keep track of the current index
function updateImage(direction){
    if(direction == "next"){
        currentImageIndex++
    }else if(direction == Previous){
        currentImageIndex--
    }else{
        currentImageIndex++
    }

    if(currentImageIndex >= imageURLs.length){
        currentImageIndex = 0;
    }
    
    if(currentImageIndex <= imageURLs.length){
        currentImageIndex = imageURLs.length;
    }

    slideShowImage.src = imageURLs[currentImageIndex]
}

setInterval(updateImage, 5000)