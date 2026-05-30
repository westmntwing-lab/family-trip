function updateCountdown() {
  const target = new Date("2026-07-31T00:00:00");
  const now = new Date();
  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const el = document.getElementById("countdown");
  el.innerHTML = `旅行まであと <span class="num">${days}</span> 日`;

  // 数字を軽くポップさせる
  const num = document.querySelector(".num");
  num.style.display = "inline-block";
  num.style.animation = "pop 0.6s ease";

  setTimeout(() => {
    num.style.animation = "";
  }, 600);
}

setInterval(updateCountdown, 1000 * 60 * 60);
updateCountdown();

/* 数字ポップアニメ */
const style = document.createElement("style");
style.innerHTML = `
@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
}`;
document.head.appendChild(style);
