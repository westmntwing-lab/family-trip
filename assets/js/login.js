function checkPassword() {
    const input = document.getElementById("password").value;
    const correct = "20260731";

    if (input === correct) {
        window.location.href = "main.html";
    } else {
        document.getElementById("error").textContent = "パスワードが違います";
    }
}
