// ローカルストレージに保存
document.querySelectorAll("input[type='checkbox']").forEach(box => {
  const id = box.dataset.id;

  // 保存された状態を復元
  const saved = localStorage.getItem("item_" + id);
  if (saved === "true") {
    box.checked = true;
  }

  // チェック変更時に保存
  box.addEventListener("change", () => {
    localStorage.setItem("item_" + id, box.checked);
    
    // チェック時のアニメーション
    if (box.checked) {
      box.style.animation = "pop 0.4s ease";
      setTimeout(() => box.style.animation = "", 400);
    }
  });
});

// ポップアニメーション
const style = document.createElement("style");
style.innerHTML = `
@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}`;
document.head.appendChild(style);
