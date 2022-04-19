
const container = document.querySelector(".container");

fetch("card.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((elem) => {

      let cards = document.createElement("div");
      cards.classList = " cards"
      container.appendChild(cards);

      let nameProduct = document.createElement("h3");
      nameProduct.textContent = elem.title;
      nameProduct.classList = "name-product";
      cards.appendChild(nameProduct);

      let imgProduct = document.createElement("img")
      imgProduct.src  = elem.img;
      imgProduct.classList = "img-product";
      cards.appendChild(imgProduct);

      let descToggle = document.createElement("span");
      descToggle.textContent = "Подробнее...";
      descToggle.classList = "desc-toggle";
      cards.appendChild(descToggle);

      descToggle.addEventListener("click", () =>{
        descProduct.classList.toggle("desc-show")
      })
      let descProduct = document.createElement("p");
      descProduct.classList = "desc-product";
      descProduct.textContent = elem.desc;
      cards.appendChild(descProduct);


      let priceProduct = document.createElement("span");
      priceProduct.textContent = elem.price + 'сом';
      priceProduct.classList = "price-product";
      cards.appendChild(priceProduct);

      let hrCard = document.createElement("hr");
      hrCard.classList = "hr-card";
      cards.appendChild(hrCard);

    });
  })
  .catch((error) => {
    console.log(error);
  });

