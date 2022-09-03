"use strict";
console.log("Github Profile Viewer by Rudransh Aggarwal 😊");

/*
const data = document.querySelector(".data");
const img = document.querySelector("img");
const inp = document.querySelector(".input");
const form = document.querySelector(".form");
// let userName;
console.log(API);
// console.log(data)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inp.value);
  let user = inp.value;
  fetchData(user);
});
// logic to fetch data from Github API
// inp.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // if(user)
//   console.log(inp.value);
//   let user = inp.value;
//   fetchData(user);
// });
// const userName = "rudrcodes";
async function fetchData(userName) {
  // https://api.github.com/users/rudrcodes
  try {
    let response = await fetch(`${API}${userName}`);
    if (response.status !== 200) {
      data.innerText = "WRONG USERNAME";
      console.log(response.status);
      throw new Error("Wrong Username");
    } else {
      let user = await response.json();
      // let user = await response.text();
      // data.innerText = user;
      data.innerText = user.login;
      document.querySelector('.bio').innerText = user.bio;
      img.src = user.avatar_url;
      console.log(user);
    }
  } catch (err) {
    window.location.reload();
    alert(err);
  }
}
// fetchData();
*/

//MAIN CODE

const cont = document.querySelector(".cont");
const avatar = document.querySelector(".avatar");
const inp = document.querySelector(".inp");
const form = document.querySelector("form");
const bio = document.querySelector(".bio");
const repos = document.querySelector(".repos");
const API = "https://api.github.com/users/";
const realName = document.querySelector(".name");
const socials = document.querySelector(".socials");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData(inp.value);
});
async function fetchData(username) {
  try {
    let response = await fetch(`${API}${username}`);
    if (response.status !== 200) {
      bio.innerText = "WRONG USERNAME";
      throw new Error("Wrong Username");
    } else {
      let user = await response.json();
      // let user = await response.text();
      // data.innerText = user;
      bio.innerText = user.login;
      realName.innerText = user.name;
      socials.innerText = user.blog;
      updateRepos(user);
      document.querySelector(".bio").innerText = user.bio;
      avatar.src = user.avatar_url;
      console.log(user);
    }
  } catch (err) {
    // window.location.reload();
    // alert(err);
    console.log(err);
  }
}
function updateRepos(user){
  console.log(user.repos_url) 
}
