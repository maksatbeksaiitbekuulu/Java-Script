

const avatar = document.querySelector(".avatar");
const login = document.querySelector(".login");
const button = document.querySelector(".button");
const names = document.querySelector(".name");
const btnLink = document.querySelector(".button-link");

  fetch("db.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let loginText = "";
      let nameText = "";
      let avatarImg = "";
      let link = "";

      data.forEach((post) => {
        avatarImg += avatar.src = `${post.avatar_url}`;
        loginText += login.textContent = `${post.login}`;
        nameText += names.textContent = `${post.name}`;
        link += btnLink.href = `${post.html_url}`;
      });

      login.textContent = loginText;
      names.textContent = nameText;
      avatar.textContent = avatarImg;
    //   button.textContent = link;
    })
    .catch((error) => {
      console.log(error);
    });


