

// Countdown Timer
const countdown = () => {
    const saleDate = new Date("Sep 30, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = saleDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
};

setInterval(countdown, 1000);