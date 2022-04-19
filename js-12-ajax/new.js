document.getElementById("get-new");

const news = new XMLHttpRequest();

news.open("GET", "news.txt", true);

news.onload = function () {
  if (this.status === 200) {
    const getNew = document.getElementById('get-new');
    const newText = document.querySelector(".output");
    const newItem = document.createElement("li");
    newItem.style.listStyle = 'none';
    const paragraph = document.createElement("p");
    const text = `${this.response}`;
    newText.appendChild(newItem);
    newItem.appendChild(paragraph);
    paragraph.textContent = text;
    getNew.addEventListener("click", () => {
      paragraph.textContent = text.split(/,/)[0] + "...";
    });
  } else if (this.status === 404) {
    alert("Can not connect to NEWS!");
  }
};

news.send();
