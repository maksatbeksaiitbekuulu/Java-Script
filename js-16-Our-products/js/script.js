const productsFilter = document.querySelector(".products-filter");
const main = document.querySelector(".main");

fetch("product.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((elem) => {

      // capds product
      let cards = document.createElement("div");
      cards.classList = `cards  ${elem.category}`;
      main.appendChild(cards);

      let nameProduct = document.createElement("h3");
      nameProduct.textContent = elem.title;
      nameProduct.classList = "name-product";
      cards.appendChild(nameProduct);

      let imgProduct = document.createElement("img");
      imgProduct.src = elem.img;
      imgProduct.classList = "img-product";
      cards.appendChild(imgProduct);

      let descToggle = document.createElement("span");
      descToggle.textContent = "Подробнее...";
      descToggle.classList = "desc-toggle";
      cards.appendChild(descToggle);

      descToggle.addEventListener("click", () => {
        descProduct.classList.toggle("desc-show");
      });
      let descProduct = document.createElement("p");
      descProduct.classList = "desc-product";
      descProduct.textContent = elem.desc;
      cards.appendChild(descProduct);

      let priceProduct = document.createElement("span");
      priceProduct.textContent = elem.price + "сом";
      priceProduct.classList = "price-product";
      cards.appendChild(priceProduct);

      let hrCard = document.createElement("hr");
      hrCard.classList = "hr-card";
      cards.appendChild(hrCard);

      // Filter Cards
      const sortProducts = document.querySelector(".sort-products");
      const filterCard = document.querySelectorAll(".cards");
      sortProducts.addEventListener("click", (event) => {
        if (event.target.tagName !== "BUTTON") return false;
        let filterClass = event.target.dataset["filter"];
        filterCard.forEach((elem) => {
          elem.classList.remove("hide");
          if (!elem.classList.contains(filterClass) && filterClass !== "all") {
            elem.classList.add("hide");
          }
        });
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
  
