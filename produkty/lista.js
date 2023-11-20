let productsArray = JSON.parse(localStorage.getItem("productsList")) || [];

if (productsArray.length === 17) {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      const modifiedProducts = json.map((product) => ({
        id: product.id,
        name: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
      }));

      localStorage.setItem("productsList", JSON.stringify(modifiedProducts));

      productsArray = modifiedProducts;
    });
} else {
  console.log(productsArray);
}

const limitName = 60;
const limitDescr = 150;

if (productsArray.length === 0) {
  document.getElementById("listaProd").innerHTML = "Brak produktów";
} else {
  productsArray.forEach((product) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("my-2");
    cardDiv.classList.add("mx-2");
    cardDiv.classList.add("d-flex");
    cardDiv.classList.add("align-items-center");
    cardDiv.classList.add("justify-content-center");
    cardDiv.style.width = "18rem";

    const cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("img-container");
    cardImgContainer.classList.add("my-2");
    cardImgContainer.style.width = "15rem";
    cardImgContainer.style.height = "15rem";
    cardImgContainer.classList.add("d-flex");
    cardImgContainer.classList.add("align-items-center");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = product.image;
    img.style.maxHeight = "100%";
    img.style.maxWidth = "100%";
    img.style.objectFit = "contain";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    if (product.name.length > limitName) {
      cardTitle.textContent = product.name.substring(0, limitName) + "...";
    } else {
      cardTitle.textContent = product.name;
    }

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    if (product.description.length > limitDescr) {
      cardText.textContent =
        product.description.substring(0, limitDescr) + "... ";
      const cardLink = document.createElement("a");
      cardLink.classList.add("link-underline-primary");
      cardLink.classList.add("d-block");
      cardLink.textContent = "Zobacz więcej ->";
      cardLink.href = "./wyswietl.html?id=" + product.id;

      cardText.appendChild(cardLink);
    } else {
      cardText.textContent = product.description;
    }

    const cardGroupButton = document.createElement("div");
    cardGroupButton.classList.add("d-flex");
    cardGroupButton.classList.add("justify-content-around");

    const cardButtonDisplay = document.createElement("a");
    cardButtonDisplay.classList.add("btn");
    cardButtonDisplay.classList.add("btn-primary");
    cardButtonDisplay.textContent = "Wyświetl";
    cardButtonDisplay.href = "./wyswietl.html?id=" + product.id;

    if (localStorage.getItem("zalogowano") === "true") {
      const cardButtonChange = document.createElement("a");
      cardButtonChange.classList.add("btn");
      cardButtonChange.classList.add("btn-warning");
      cardButtonChange.textContent = "Edytuj";
      cardButtonChange.href = "./edytuj.html?id=" + product.id;

      const cardButtonRemove = document.createElement("a");
      cardButtonRemove.classList.add("btn");
      cardButtonRemove.classList.add("btn-danger");
      cardButtonRemove.setAttribute("id", "delete" + product.id);
      cardButtonRemove.textContent = "Usuń";

      cardButtonRemove.href = "./lista.html";

      cardGroupButton.appendChild(cardButtonChange);
      cardGroupButton.appendChild(cardButtonRemove);
    }

    cardGroupButton.appendChild(cardButtonDisplay);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    cardImgContainer.appendChild(img);
    cardDiv.appendChild(cardImgContainer);
    cardDiv.appendChild(cardBody);

    cardBody.appendChild(cardGroupButton);

    listaProd.appendChild(cardDiv);
    if (localStorage.getItem("zalogowano") === "true") {
      document
        .getElementById("delete" + product.id)
        .addEventListener("click", function (event) {
          if (confirm("Czy chcesz usunąć produkt „" + product.name + "”?")) {
            productsArray.splice(
              productsArray.findIndex((obj) => obj.id === product.id),
              1
            );
            localStorage.setItem("productsList", JSON.stringify(productsArray));
          }
        });
    }
  });
}
