<template>
<div class="homepage">
    <router-link to="/index" class="navigate" aria-label="Go to Hobbies & Interests page">
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
        </router-link>
    </div>

    <div class="main">
        <div id="myBtnContainer">
            <button class="btn active" onclick="filterSelection('all')"> Show All</button> 
            <button class="btn" onclick="filterSelection('wander-through-wonders')">Wander Through Wonders</button>
            <button class="btn" onclick="filterSelection('circle-of-gratitude')">Circle of Gratitude</button>
            <button class="btn" onclick="filterSelection('my-favorite-part-of-the-dei')"> My Favorite Part of the Dei</button>
            <button class="btn" onclick="filterSelection('food-bytes')"> Food Bytes</button>
            <button class="btn" onclick="filterSelection('meows-woofs')"> Meows & Woofs</button>
            <button class="btn" onclick="filterSelection('its-apc')"> IT's APC</button>
        </div>

        <div class="row">

            <div class="column wander-through-wonders">
                <div class="content">
                    <img src="../visuals/picture_gallery/ww1.jpg" style="width:100%">
                </div>
            </div>

            <div class="column circle-of-gratitude">
                <div class="content">
                    <img src="../visuals/picture_gallery/cog1.jpg" style="width:100%">
                </div>
            </div>

            <div class="column my-favorite-part-of-the-dei">
                <div class="content">
                    <img src="../visuals/picture_gallery/dei1.jpg" style="width:100%">
                </div>
            </div>

            <div class="column food-bytes">
                <div class="content">
                    <img src="../visuals/picture_gallery/fb1.jpg" style="width:100%">
                </div>
            </div>

            <div class="column meows-woofs">
                <div class="content">
                    <img src="../visuals/picture_gallery/mw1.jpg" style="width:100%">
                </div>
            </div>

            <div class="column its-apc">
                <div class="content">
                    <img src="../visuals/picture_gallery/apc1.jpg" style="width:100%">
                </div>
            </div>

            <div class="column wander-through-wonders">
                <div class="content">
                    <img src="../visuals/picture_gallery/ww2.jpg" style="width:100%">
                </div>
            </div>

            <div class="column circle-of-gratitude">
                <div class="content">
                    <img src="../visuals/picture_gallery/cog2.jpg" style="width:100%">
                </div>
            </div>

            <div class="column my-favorite-part-of-the-dei">
                <div class="content">
                    <img src="../visuals/picture_gallery/dei2.jpg" style="width:100%">
                </div>
            </div>

            <div class="column food-bytes">
                <div class="content">
                    <img src="../visuals/picture_gallery/fb2.jpg" style="width:100%">
                </div>
            </div>

            <div class="column meows-woofs">
                <div class="content">
                    <img src="../visuals/picture_gallery/mw2.jpg" style="width:100%">
                </div>
            </div>

            <div class="column its-apc">
                <div class="content">
                    <img src="../visuals/picture_gallery/apc2.jpg" style="width:100%">
                </div>
            </div>

            <div class="column wander-through-wonders">
                <div class="content">
                    <img src="../visuals/picture_gallery/ww3.jpg" style="width:100%">
                </div>
            </div>

            <div class="column circle-of-gratitude">
                <div class="content">
                    <img src="../visuals/picture_gallery/cog3.jpg" style="width:100%">
                </div>
            </div>

            <div class="column my-favorite-part-of-the-dei">
                <div class="content">
                    <img src="../visuals/picture_gallery/dei3.jpg" style="width:100%">
                </div>
            </div>

            <div class="column food-bytes">
                <div class="content">
                    <img src="../visuals/picture_gallery/fb3.jpg" style="width:100%">
                </div>
            </div>

            <div class="column meows-woofs">
                <div class="content">
                    <img src="../visuals/picture_gallery/mw3.jpg" style="width:100%">
                </div>
            </div>

            <div class="column its-apc">
                <div class="content">
                    <img src="../visuals/picture_gallery/apc3.jpg" style="width:100%">
                </div>
            </div>

            <div class="column wander-through-wonders">
                <div class="content">
                    <img src="../visuals/picture_gallery/ww4.jpg" style="width:100%">
                </div>
            </div>

            <div class="column circle-of-gratitude">
                <div class="content">
                    <img src="../visuals/picture_gallery/cog4.jpg" style="width:100%">
                </div>
            </div>

            <div class="column my-favorite-part-of-the-dei">
                <div class="content">
                    <img src="../visuals/picture_gallery/dei4.jpg" style="width:100%">
                </div>
            </div>

            <div class="column food-bytes">
                <div class="content">
                    <img src="../visuals/picture_gallery/fb4.jpg" style="width:100%">
                </div>
            </div>

            <div class="column meows-woofs">
                <div class="content">
                    <img src="../visuals/picture_gallery/mw4.jpg" style="width:100%">
                </div>
            </div>

            <div class="column its-apc">
                <div class="content">
                    <img src="../visuals/picture_gallery/apc4.jpg" style="width:100%">
                </div>
            </div>
            
            <div class="column wander-through-wonders">
                <div class="content">
                    <img src="../visuals/picture_gallery/ww5.jpg" style="width:100%">
                </div>
            </div>

            <div class="column circle-of-gratitude">
                <div class="content">
                    <img src="../visuals/picture_gallery/cog5.jpg" style="width:100%">
                </div>
            </div>

            <div class="column my-favorite-part-of-the-dei">
                <div class="content">
                    <img src="../visuals/picture_gallery/dei5.jpg" style="width:100%">
                </div>
            </div>

            <div class="column food-bytes">
                <div class="content">
                    <img src="../visuals/picture_gallery/fb5.jpg" style="width:100%">
                </div>
            </div>

            <div class="column meows-woofs">
                <div class="content">
                    <img src="../visuals/picture_gallery/mw5.jpg" style="width:100%">
                </div>
            </div>

            <div class="column its-apc">
                <div class="content">
                    <img src="../visuals/picture_gallery/apc5.jpg" style="width:100%">
                </div>
            </div>

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
html,
body {
    background-color: var(--white);
    height: auto;
}

.main {
    width: 100vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin: 20px 0;
}

.column {
    width: calc(20% - 16px);
    display: none;
}

.content {
    padding: 20px;
    border-radius: 10px;
}

.show {
    display: block;
    height: 100%;
}

.btn {
    border: none;
    outline: none;
    padding: 10px;
    background-color: var(--primary);
    border-radius: 10px;
    font-family: "Bebas Neue", Sans-Serif;
    font-size: 2.5rem;
    color: var(--white);
}

.btn:hover {
    background-color: var(--dark-blue);
}

.btn.active {
    background-color: var(--secondary);
    color: var(--white);
}

button,
.btn {
    text-transform: uppercase;
    cursor: url('../visuals/cursor_pointer.png'), pointer;
}

h2 {
    text-align: center;
}

#myBtnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--white);
    flex-wrap: wrap;
}

.wander-through-wonders,
.food-bytes {
    background-color: var(--primary);
    border-radius: 10px;
}

.circle-of-gratitude,
.meows-woofs {
    background-color: var(--secondary);
    border-radius: 10px;
}

.my-favorite-part-of-the-dei,
.its-apc {
    background-color: var(--dark-blue);
    border-radius: 10px;
}

/* Responsive Design */

/* Small screens (max-width: 480px) */
@media (max-width: 480px) {
    .row {
        flex-direction: column;
        align-items: center;
    }
    .column {
        width: 100%;
    }
    .btn {
        font-size: 1.8rem;
        padding: 10px 12px;
    }
}

/* Medium screens (481px - 768px) */
@media (min-width: 481px) and (max-width: 768px) {
    .row {
        justify-content: space-around;
    }
    .column {
        width: calc(50% - 16px);
    }
    .btn {
        font-size: 2rem;
        padding: 12px 14px;
    }
}

/* Large screens (769px - 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
    .row {
        justify-content: space-between;
    }
    .column {
        width: calc(33.33% - 16px);
    }
}
</style>