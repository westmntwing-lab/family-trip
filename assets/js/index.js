function updateCountdown() {
    const targetDate = new Date("2026-03-20");
    const now = new Date();

    const diff = targetDate - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").textContent =
        `出発まであと ${days}日`;
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60);
