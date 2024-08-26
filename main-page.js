window.onload = function() {
            document.getElementById("cookie-banner").style.display = "block";
        }

        // Обработчик для принятия файлов cookie
        document.getElementById("cookie-accept").addEventListener("click", function() {
            document.getElementById("cookie-banner").style.display = "none"; // Скрываем баннер
        });