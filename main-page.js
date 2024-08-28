window.onload = function() {
    document.getElementById("cookie-banner").style.display = "block";
}

// Обработчик для принятия куки
document.getElementById("cookie-accept").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
});