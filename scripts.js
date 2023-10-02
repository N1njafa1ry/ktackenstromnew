function togglePopup(id) {
    let content = document.getElementById(id);

    // First, close all popups
    let allPopups = document.querySelectorAll('.popup-content');
    for (let popup of allPopups) {
        popup.style.display = 'none';
    }

    // Now, show the clicked popup
    content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
}

function togglePopup(contentId) {
    var content = document.getElementById(contentId);
    content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
    
    // Toggling the active class
    if (content.classList.contains('active')) {
        content.classList.remove('active');
    } else {
        content.classList.add('active');
    }
}

function togglePopup(contentId) {
    // Close all popups
    var allPopups = document.querySelectorAll('.popup-content');
    for (var i = 0; i < allPopups.length; i++) {
        allPopups[i].style.display = 'none';
        allPopups[i].classList.remove('active');
    }

    // Open the clicked popup
    var content = document.getElementById(contentId);
    content.style.display = 'block';
    content.classList.add('active');
}

let slideIndex = 1;

function showImage(srcArray, index = 1) {
    const modal = document.getElementById('imageModal');
    const modalSlides = document.getElementById('modalSlides');
    
    modalSlides.innerHTML = ''; // Clear existing images

    srcArray.forEach(src => {
        let img = document.createElement('img');
        img.src = src;
        img.classList.add('modal-slide');
        modalSlides.appendChild(img);
    });

    modal.style.display = "block";
    slideIndex = index + 1; // Set current slide index to the clicked image
    showSlide(slideIndex); // Display the initial image
}

function slideImage(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName('modal-slide');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function closeImage() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

document.getElementById("toggleButton").addEventListener("click", function() {
    var iconsDiv = document.querySelector(".icons");
    if (iconsDiv.style.display === "none" || iconsDiv.style.display === "") {
        iconsDiv.style.display = "flex";
    } else {
        iconsDiv.style.display = "none";
    }
});
