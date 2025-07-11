// Toggle span Class  On İcon

document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class  Fa-spin  For Rotaiton on Self
  this.classList.toggle("fa-spin");

  // Toggle class Open On Main  Setting Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Swicth Colors

const colorsLi = document.querySelectorAll(".colors-list-li");

colorsLi.forEach((li) => {
    li.addEventListener("click",(e) => {

        // Set color On Root 
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
    })
});







// Start  Change background
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const landingPage = document.getElementById("landingPage");

setInterval(() => {
  const bg = images[Math.floor(Math.random() * images.length)];
  landingPage.style.backgroundImage = 'url("imgs/' + bg + '")';
}, 10000);

// End Change background
