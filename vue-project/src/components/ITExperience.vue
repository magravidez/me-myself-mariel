<template>
<div class="homepage">
        <a href="index.html" class="navigate" aria-label="Go to Hobbies & Interests page">
            <button class="homepage-button">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="460.298px" height="460.297px"
                    viewBox="0 0 460.298 460.297" style="enable-background:new 0 0 460.298 460.297;"
                    xml:space="preserve">
                    <path d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041
                            c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629
                            c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939
                            z" fill="#FFFAF0"></path>
                    <path d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816
                            c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245
                            c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136
                            c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998
                            L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125
                            c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z"
                        fill="#FFFAF0">
                    </path>
                </svg>
            </button>
        </a>
    </div>

    <div class="bento-box">

        <div class="course">
            <h2>BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</h2>
            <p>With Specialization in Mobile and Internet Technologies</p>
        </div>

        <div class="languages">
            <h3>Languages</h3>
            <i class="fa-brands fa-css3 fa-8x"></i>
            <img src="https://cdn.simpleicons.org/dart/353839" alt="Dart Icon">
            <i class="fa-brands fa-html5 fa-8x"></i>
            <i class="fa-brands fa-java fa-8x"></i>
            <i class="fa-brands fa-js fa-8x"></i>
            <i class="fa-brands fa-python fa-8x"></i>
            <img src="../visuals/it_experience/sql.png" alt="SQL Icon">
        </div>

        <div class="frameworks">
            <h3>Frameworks</h3>
            <i class="fa-brands fa-bootstrap fa-8x"></i>
            <img src="https://cdn.simpleicons.org/flutter/353839" alt="Flutter Icon">
            <i class="fa-brands fa-vuejs fa-8x"></i>
        </div>

        <div class="databases">
            <h3>Databases</h3>
            <i class="fa-brands fa-mdb fa-8x"></i>
            <img src="https://cdn.simpleicons.org/supabase/353839" alt="Supabase Icon">
        </div>

        <div class="development">
            <h3>Dev Environments</h3>
            <img src="https://cdn.simpleicons.org/androidstudio/353839" alt="Supabase Icon">
            <img src="https://cdn.simpleicons.org/eclipseide/353839" alt="Eclipse Icon">
            <img src="https://cdn.simpleicons.org/mysql/353839" alt="MySQL Workbench Icon">
        </div>

        <div class="uiux">
            <h3>UI/UX Tools</h3>
            <i class="fa-brands fa-figma fa-8x"></i>
            <img src="https://cdn.simpleicons.org/moqups/353839" alt="Moqups Icon">
        </div>

        <div class="image-editing">
            <h3>Image Editing</h3>
            <img src="../visuals/it_experience/photoshop.png" alt="Adobe Photoshop Icon">
        </div>

        <div class="video-editing">
            <h3>Video Editing</h3>
            <img src="../visuals/it_experience/ae.png" alt="Adobe After Effects Icon">
            <img src="../visuals/it_experience/premiere.png" alt="Adobe Premiere Icon">
            <img src="https://cdn.simpleicons.org/davinciresolve/353839" alt="DaVinci Resolve Icon">
        </div>

        <div class="productivity">
            <h3>Productivity Tools</h3>
            <img src="../visuals/it_experience/excel.png" alt="Microsoft Excel Icon">
            <img src="../visuals/it_experience/word.png" alt="Microsoft Word Icon">
        </div>

        <div class="version">
            <h3>Code Collaboration</h3>
            <i class="fa-brands fa-github fa-8x"></i>
        </div>

        <div class="os">
            <h3>Operating System</h3>
            <i class="fa-brands fa-ubuntu fa-8x"></i>
            <img src="https://cdn.simpleicons.org/virtualbox/353839" alt="VirtualBox Icon">
        </div>
    </div>
</template>


<script>
export default {
  name: "HomePage",
  mounted() {
    // Smooth Transition
document.addEventListener("DOMContentLoaded", function () {
    const navigateButtons = document.querySelectorAll(".navigate");

    navigateButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const targetUrl = this.getAttribute("href");

            if (targetUrl) {
                document.body.style.opacity = "0";
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 300);
            }
        });
    });
});

// Light/Dark Mode
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("theme-modal");
  const lightBtn = document.getElementById("light-mode-btn");
  const darkBtn = document.getElementById("dark-mode-btn");

  const savedTheme = sessionStorage.getItem("theme");

  if (savedTheme) {
      document.body.classList.toggle("dark-mode", savedTheme === "dark");
      modal.style.display = "none";
  }

  lightBtn.addEventListener("click", function () {
      document.body.classList.remove("dark-mode");
      sessionStorage.setItem("theme", "light");
      modal.style.display = "none";
  });

  darkBtn.addEventListener("click", function () {
      document.body.classList.add("dark-mode");
      sessionStorage.setItem("theme", "dark");
      modal.style.display = "none";
  });
});

// Feedback
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("feedbackModal");
    const openModalLink = document.querySelector(".bb-feedback a");
    const closeModal = document.querySelector(".close");

    openModalLink.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        const thankYouMessage = document.getElementById("thankYouMessage");
        const modal = document.getElementById("feedbackModal");
    
        thankYouMessage.classList.remove("hidden");
        thankYouMessage.style.opacity = "1";
    
        setTimeout(() => {
            thankYouMessage.style.opacity = "0";
            setTimeout(() => {
                thankYouMessage.classList.add("hidden");
            }, 300);

            modal.style.display = "none";
        }, 2000);
    });    
});

// Picture Gallery
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
  },
};
</script>

<style scoped>
:root {
  --primary: #6495ED;
  --secondary: #9370DB;
  --dark-blue: #0072BB;
  --dark-purple: #6A5ACD;
  --orange: #ff8c00;
  --black: #353839;
  --white: #FFFAF0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-size: 10px;
  text-align: left;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--white);
  color: var(--black);
  cursor: url('../visuals/cursor_default.png'), default;
}

.dark-mode {
  background-color: var(--black);
  color: var(--white);
}

a,
button,
select,
option {
  cursor: url('../visuals/cursor_pointer.png'), pointer;
}

h1,
h2,
h3,
h4 {
  font-family: "Bebas Neue", Sans-Serif;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 2px;
  color: var(--white);
  margin: 0;
}

h1 {
  line-height: 0.9;
  font-size: 8rem;
}

h2 {
  font-size: 6.5rem;
}

h3 {
  font-size: 6rem;
}

h4 {
  font-size: 3.5rem;
}

p {
  font-family: Verdana, Sans-Serif;
  font-size: 2rem;
  color: var(--white);
  margin: 0;
  padding: 0;
}

.homepage {
  display: absolute;
  position: fixed;
  top: 20px;
  left: 20px;
}

.homepage-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--orange);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: .5s;
  overflow: hidden;
  position: relative;
  padding: 8px;
}

.homepage-button:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: .5s;
  background-color: var(--orange);
  align-items: center;
}

.homepage-button::before {
  position: absolute;
  top: -14px;
  content: "Home";
  color: var(--orange);
  transition-duration: .3s;
  font-size: 2px;
}

.homepage-button:hover::before {
  font-size: 2rem;
  opacity: 1;
  transform: translateY(30px);
  transition-duration: .3s;
}
html, 
body {
    background-color: var(--white);
    height: auto;
    margin: 0;
    padding: 0;
}

.bento-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
}

.bento-box div {
    overflow: hidden;
    border-radius: 10px;
    height: auto;
    padding: 20px;
}
    
.course {
    grid-column: span 2 / span 2;
    background-color: var(--primary);
    justify-content: center;
}

.languages {
    grid-column: span 2 / span 2;
    grid-row-start: 2;
    background-color: var(--secondary);
}

.frameworks {
    grid-row-start: 3;
    background-color: var(--dark-blue);
}

.databases {
    grid-row-start: 3;
    background-color: var(--dark-purple);
}

.development {
    grid-row-start: 4;
    background-color: var(--primary);
}

.uiux {
    grid-row-start: 4;
    background-color: var(--secondary);
}

.image-editing {
    grid-row-start: 5;
    background-color: var(--dark-blue);
}

.video-editing {
    grid-row-start: 5;
    background-color: var(--dark-purple);
}

.productivity {
    grid-row-start: 6;
    background-color: var(--primary);
}

.version {
    grid-row-start: 6;
    background-color: var(--secondary);
}

.os {
    grid-row-start: 7;
    grid-column: 1 / -1;
    background-color: var(--dark-blue);
}

.course p {
    font-size: 3rem;
}

.bento-box div > img {
    width: 70px;
    height: auto;
}

.bento-box div > i {
    color: var(--black);
}

.bento-box div {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

h2 {
    padding-top: 20px;
    line-height: 1;
    text-align: center;
}

/* Responsive Styles */
@media (max-width: 480px) {
    .bento-box {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
    }

    .bento-box div {
        padding: 15px;
    }

    .course p {
        font-size: 2rem;
    }

    .bento-box div > img {
        width: 50px;
    }
    h2 {
        font-size: 5rem;
        line-height: 1;
        text-align: center;
    }
    h3 {
        font-size: 4rem;
    }
    p {
        font-size: 1.3rem;
        text-align: center;
    }
    i, img {
        transform: scale(0.8);
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .bento-box {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
    }

    .bento-box div {
        padding: 18px;
    }

    .course p {
        font-size: 2.5rem;
    }
    h2 {
        font-size: 5rem;
        line-height: 1;
        text-align: center;
    }
    h3 {
        font-size: 4rem;
    }
    p {
        font-size: 1.3rem;
        text-align: center;
    }
    i, img {
        transform: scale(0.8);
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .bento-box {
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
        padding: 18px;
    }
    h2 {
        font-size: 7rem;
        line-height: 1;
        text-align: center;
    }
}
</style>