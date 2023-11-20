if (localStorage.getItem("zalogowano") === "true") {
  document.getElementById("log").classList.add("btn-danger");
  document.getElementById("log").classList.remove("btn-primary");
  document.getElementById("log").innerHTML = "Wyloguj";
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("log").addEventListener("click", function (event) {
      event.preventDefault();

      localStorage.setItem("zalogowano", "false");
      window.location.href = "./index.html";
    });
  });
} else {
  document.getElementById("add").classList.add("disabled");
  document.getElementById("add").classList.remove("btn-primary");
}
