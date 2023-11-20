let productsArray = JSON.parse(localStorage.getItem("productsList")) || [];
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const i = productsArray.findIndex((obj) => obj.id === parseInt(productId));

if (i === -1) {
  alert("Produkt nie istnieje.");
  window.location.href = "./lista.html";
} else {
  document.getElementById("title").innerHTML = productsArray[i].name;
  document.getElementById("image").src = productsArray[i].image;
  document.getElementById("description").innerHTML =
    productsArray[i].description;
  document.getElementById("price").innerHTML = productsArray[i].price;
}
