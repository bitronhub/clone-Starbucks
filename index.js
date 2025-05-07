const track = document.getElementById("carouselTrack");
const indicators = document.getElementById("carouselIndicators");
const cards = track.querySelectorAll(".flex-shrink-0");

// Change condition: less than 992 (includes tablets)
let visibleCards = window.innerWidth < 992 ? 1 : 3;
let currentIndex = 0;

function updateCarousel() {
    visibleCards = window.innerWidth < 992 ? 1 : 3; // ensure it updates on resize
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateIndicators();
}

function moveCarousel(direction) {
    const maxIndex = cards.length - visibleCards;
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = maxIndex;
    if (currentIndex > maxIndex) currentIndex = 0;

    updateCarousel();
}

function updateIndicators() {
    indicators.innerHTML = "";
    const maxIndex = cards.length - visibleCards;

    for (let i = 0; i <= maxIndex; i++) {
        const btn = document.createElement("button");
        btn.className = `btn p-1 rounded-circle ${i === currentIndex ? "bg-dark" : "bg-secondary opacity-50"}`;
        btn.style.width = "10px";
        btn.style.height = "10px";
        btn.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel();
        });
        indicators.appendChild(btn);
    }
}

window.addEventListener("DOMContentLoaded", function () {
    const mapLink = document.getElementById("openMapLink");
    const query = encodeURIComponent("Starbucks near me");
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    let mapURL = "https://www.google.com/maps/search/?api=1&query=" + query; // default

    if (/iPhone|iPad|Macintosh/.test(userAgent)) {
      mapURL = "http://maps.apple.com/?q=" + query;
    } else if (/android/i.test(userAgent)) {
      mapURL = "geo:0,0?q=" + query;
    }

    if (mapLink) {
      mapLink.setAttribute("href", mapURL);
    }
  });

  // Detect Apple device and show Apple Maps link
  document.addEventListener("DOMContentLoaded", function () {
    const isApple = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);
    const appleLink = document.getElementById("appleMapLink");

    if (isApple && appleLink) {
      appleLink.classList.remove("d-none");
    }
  });


