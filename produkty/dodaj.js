let productsArray = JSON.parse(localStorage.getItem("productsList")) || [];

document.getElementById("Save").addEventListener("click", function (event) {
  if (confirm("Czy chcesz dodać?")) {
    const fileInput = document.getElementById("formFile");
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageData = event.target.result;

      let newID = 1;

      for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].id > newID) {
          newID = productsArray[i].id;
        }
      }

      newID++;

      const newProduct = {
        id: newID,
        image: imageData,
        name: document.getElementById("formName").value,
        description: document.getElementById("formDesc").value,
        price: document.getElementById("formPrice").value,
      };

      productsArray.push(newProduct);
      localStorage.setItem("productsList", JSON.stringify(productsArray));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    window.location.href = "./lista.html";
  }
});

document.getElementById("Cancel").addEventListener("click", function (event) {
  if (confirm("Czy chcesz anulować wprowadzanie zmian?")) {
    window.location.href = "./lista.html";
  }
});
