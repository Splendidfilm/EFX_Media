// const slide = document.getElementById("slide-Top")
// const image = document.querySelectorAll(".images")
// // // const popup = document.getElementById('popup')
// // // const popupImage = document.getElementById('popupImage')

// let i = 0
// let time = 10000
// let images = []
// images [0] = './images/designs/Abah practice.jpg'
// images [1] = './images/designs/Accounting Pray'
// images [2] = './images/designs/Casfon Tv.jpg'
// images [3] = './images/designs/e libray.jpg'
// images [4] = './images/designs/ech.jpg'
// images [5] = './images/designs/EFX NEW YEAR.jpg'
// images [6] = './images/designs/Ella Beauty Shop.jpg'
// images [7] = './images/designs/Empowering Dreams.jpg'
// images [8] = './images/designs/Faculty Carol.jpg'
// images [9] = './images/designs/Follow Up Graduation.jpg'
// images [10] = './images/designs/Media.jpg'
// images [11] = './images/designs/New year AGN.jpg'
// images [12] ='./images/designs/peniel Happy Christmas.jpg'
// images [13] ='./images/designs/Peniel New Year.jpg'
// images [14] ='./images/designs/Peniel Project 2.jpg'
// images [15] ='./images/designs/Rescue Mission.jpg'
// images [16] ='./images/designs/Rhema.jpg'


// // slide.style.transition = 'ease-in-out'
// function changeimg(){
//  slide.classList.remove('active')
//  setTimeout(() => {
//     slide.src =images[i]
    
//     i = (i + 1) % images.length

//     slide.classList.add('active')

//     setTimeout(changeimg, time)
//  },1000)
// }
// window.onload = () => {
//     slide.src = images[i]
//     slide.classList.add('active')
//     setInterval(changeimg, time)
// }




const popupOverlay = document.getElementById('popupOverlay');
const popupImage = document.getElementById('popupImage');
const closePopup = document.getElementById('closePopup');

function openPopup(ImageSrc) {
    popupImage.src = ImageSrc
    popupOverlay.style.display = 'flex'
    
}

function hidePopup() {
    popupOverlay.style.display = 'none'
}

closePopup.addEventListener('click', hidePopup)

document.querySelectorAll('.images').forEach(image => {
    image.addEventListener('click', () => openPopup(image.src))
})

popupOverlay .addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        hidePopup()
    }
})