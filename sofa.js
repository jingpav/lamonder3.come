
document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const showBox = document.querySelector('.show-box');

// Define the amount to scroll (half the viewport width)
const scrollAmount = window.innerWidth * 0.5;

// Add click event listener for the left button
leftButton.addEventListener('click', () => {
    if (showBox) {
        showBox.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        console.error("Element with class 'show-box' not found.");
    }
});

// Add click event listener for the right button
rightButton.addEventListener('click', () => {
    if (showBox) {
        showBox.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    } else {
        console.error("Element with class 'show-box' not found.");
    }
});

    
});


    // Function to check scroll position and update navbar style

    document.addEventListener('DOMContentLoaded', () => {
        const getStartLink = document.querySelector(".get-start-link");
    
        if (getStartLink) {
            getStartLink.addEventListener('mouseover', () => {
                // Add the scaling class on mouseover
                getStartLink.classList.add('scale-up');
            });
    
            getStartLink.addEventListener('mouseout', () => {
                // Remove the scaling class on mouseout
                getStartLink.classList.remove('scale-up');
            });
        }
    });
    
    // Attach the scroll event listener
    window.addEventListener('scroll', checkScroll);

    function checkScroll() {
        const navBar = document.querySelector(".navbar");
        if (window.scrollY > 500) {
            navBar.style.backgroundColor = "gray";
        } else {
            navBar.style.backgroundColor = "#0fa7a4"; // Original color
            
        }
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        const container = document.querySelector(".container");
        const img = [
            'bgimg/bg1.png',
            'bgimg/bg3.png',
            'bgimg/bg4.png',
            'bgimg/bg5.png',
            'bgimg/bg7.png',
            'bgimg/bg8.png'
        ];
        let currentIndex = 0;
        
        function changeBackground() {
            currentIndex = (currentIndex + 1) % img.length;
            container.style.backgroundImage = `url(${img[currentIndex]})`;
        }
    
        // Preload images
        img.forEach(src => {
            const preloadedImg = new Image();
            preloadedImg.src = src;
        });
    
        // Change background every 5 seconds
        setInterval(changeBackground, 5000);
    });
    