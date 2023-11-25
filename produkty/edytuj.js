let productsArray = JSON.parse(localStorage.getItem("productsList")) || [];
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const i = productsArray.findIndex((obj) => obj.id === parseInt(productId));

if (i === -1) {
  alert("Produkt nie istnieje.");
  window.location.href = "./lista.html";
} else {
  document.getElementById("title").innerHTML += productsArray[i].name;
  document.getElementById("image").src = productsArray[i].image;
  document.getElementById("formName").value = productsArray[i].name;
  document.getElementById("formDesc").value = productsArray[i].description;
  document.getElementById("formPrice").value = productsArray[i].price;
}

document.getElementById("Save").addEventListener("click", function (event) {
  if (confirm("Czy chcesz zapisać zmiany?")) {
    const fileInput = document.getElementById("formFile");
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageData = event.target.result;

      productsArray[i].image = imageData;

      productsArray[i].name = document.getElementById("formName").value;
      productsArray[i].description = document.getElementById("formDesc").value;
      productsArray[i].price = document.getElementById("formPrice").value;
      localStorage.setItem("productsList", JSON.stringify(productsArray));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    window.location.href = "./wyswietl.html?id=" + productsArray[i].id;
  }
});

document.getElementById("Cancel").addEventListener("click", function (event) {
  if (confirm("Czy chcesz anulować wprowadzanie zmian?")) {
    window.location.href = "./lista.html";
  }
});
