document.getElementById("get-new").addEventListener("click", loadData);

function loadData() {
  const news = new XMLHttpRequest();

  news.open("GET", "news.txt", true);

  news.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      // document.querySelector(".output").innerHTML = `
      //   <p>
      //     ${this.response}
      //   </p>`;
    } else if (this.status === 404) {
      alert("Can not connect to DB!");
    }
  };

  // news.onprogress = function () {
  //   console.log(news.readyState);
  // };

  news.send();

}




// const newText = document.querySelector(".output");
// const paragraph = document.createElement("p");
// paragraph.textContent = `${this.response}`;
// newText.appendChild(paragraph);