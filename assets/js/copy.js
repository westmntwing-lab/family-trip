function copyAddress(id) {
    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text).then(() => {
        alert("住所をコピーしました！");
    });
}
