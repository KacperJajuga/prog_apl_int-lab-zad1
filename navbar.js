let currURL = window.location.pathname;
let currLoc = currURL.substring(currURL.lastIndexOf("/") + 1, currURL.length);
let zalogowano = localStorage.getItem("zalogowano");

document
  .getElementById("nawigacja")
  .classList.add("navbar", "navbar-expand-md", "fixed-top", "bg-body-tertiary");

const navbar = document.createElement("div");
navbar.classList.add("container-fluid");

const brand = document.createElement("a");
brand.innerHTML = "Sklep";
brand.classList.add("navbar-brand");
if (currLoc === "index.html" || currLoc === "logowanie.html") {
  brand.href = "./index.html";
} else {
  brand.href = "../index.html";
}

const toggleButton = document.createElement("button");
toggleButton.classList.add("navbar-toggler");
toggleButton.setAttribute("type", "button");
toggleButton.setAttribute("data-bs-toggle", "collapse");
toggleButton.setAttribute("data-bs-target", "#navbarNav");
toggleButton.setAttribute("aria-controls", "navbarNav");
toggleButton.setAttribute("aria-expanded", "false");
toggleButton.setAttribute("aria-label", "Pokaż/zamknij nawigację");

const toggleIcon = document.createElement("span");
toggleIcon.classList.add("navbar-toggler-icon");

const navDiv = document.createElement("div");
navDiv.classList.add("collapse", "navbar-collapse");
navDiv.setAttribute("id", "navbarNav");

const navList = document.createElement("ul");
navList.classList.add("navbar-nav");

const navHomeItem = document.createElement("li");
navHomeItem.classList.add("nav-item");

const navHome = document.createElement("a");
navHome.innerHTML = "Strona główna";
navHome.classList.add("nav-link");
if (currLoc === "index.html") {
  navHome.classList.add("active");
  navHome.setAttribute("aria-current", "page");
  navHome.setAttribute("href", "./index.html");
} else if (currLoc === "logowanie.html") {
  navHome.setAttribute("href", "./index.html");
} else {
  navHome.setAttribute("href", "../index.html");
}

const navProdListItem = document.createElement("li");
navProdListItem.classList.add("nav-item");

const navProdList = document.createElement("a");
navProdList.innerHTML = "Lista produktów";
navProdList.classList.add("nav-link");
if (currLoc === "lista.html") {
  navProdList.classList.add("active");
  navProdList.setAttribute("aria-current", "page");
  navProdList.setAttribute("href", "./lista.html");
} else if (currLoc === "logowanie.html" || currLoc === "index.html") {
  navProdList.setAttribute("href", "./produkty/lista.html");
} else {
  navProdList.setAttribute("href", "./lista.html");
}

const navAddItem = document.createElement("li");
navAddItem.classList.add("nav-item");

const navAdd = document.createElement("a");
navAdd.innerHTML = "Dodaj produkt";
navAdd.classList.add("nav-link");
if (currLoc === "dodaj.html") {
  navAdd.classList.add("active");
  navAdd.setAttribute("aria-current", "page");
  navAdd.setAttribute("href", "./dodaj.html");
} else if (zalogowano === "false") {
  navAdd.classList.add("disabled");
} else if (currLoc === "index.html") {
  navAdd.setAttribute("href", "./produkty/dodaj.html");
} else {
  navAdd.setAttribute("href", "./dodaj.html");
}

const navLoginItem = document.createElement("li");
navLoginItem.classList.add("nav-item");

const navLogin = document.createElement("a");
navLogin.classList.add("nav-link");
if (zalogowano === "false") {
  navLogin.innerHTML = "Zaloguj się";
  navLogin.classList.add("text-success");
  if (currLoc === "index.html") {
    navLogin.setAttribute("href", "./logowanie.html");
  } else {
    navLogin.setAttribute("href", "../logowanie.html");
  }
} else {
  navLogin.innerHTML = "Wyloguj się";
  navLogin.classList.add("text-danger");
  navLogin.setAttribute("id", "navbarLogout");
  if (currLoc === "index.html") {
    navLogin.setAttribute("href", "./index.html");
  } else {
    navLogin.setAttribute("href", "../index.html");
  }
}

navbar.appendChild(brand);
navbar.appendChild(navDiv);

toggleButton.appendChild(toggleIcon);
navbar.appendChild(toggleButton);

navHomeItem.appendChild(navHome);
navList.appendChild(navHomeItem);

navProdListItem.appendChild(navProdList);
navList.appendChild(navProdListItem);

navAddItem.appendChild(navAdd);
navList.appendChild(navAddItem);

navLoginItem.appendChild(navLogin);
navList.appendChild(navLoginItem);

navDiv.appendChild(navList);

nawigacja.appendChild(navbar);

document
  .getElementById("navbarLogout")
  .addEventListener("click", function (event) {
    localStorage.setItem("zalogowano", "false");
  });
