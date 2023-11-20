let powodzenie = document.getElementById("powodzenie");
powodzenie.style.display = "none";
let niepowodzenie = document.getElementById("niepowodzenie");
niepowodzenie.style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loguj").addEventListener("click", function (event) {
    event.preventDefault();

    pobierzDane();
  });
});

function pobierzDane() {
  let login = document.getElementById("login").value;
  let haslo = document.getElementById("haslo").value;

  if (login !== "" && haslo !== "") {
    niepowodzenie.style.display = "none";
    powodzenie.style.display = "block";
    localStorage.setItem("zalogowano", "true");
    setTimeout(() => {
      window.location.href = "./index.html";
    }, "1000");
  } else {
    niepowodzenie.style.display = "block";
  }
}
