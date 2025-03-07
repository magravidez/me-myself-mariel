<template>
<div class="homepage">
  <router-link to="/" class="navigate" aria-label="Go to Hobbies & Interests page">
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

    <div class="bento-box">
        <div class="div1">
            <div class="icon-text">
                <i class="fa-solid fa-film fa-10x"></i>
                <h2>Films</h2>
            </div>            
            <div class="image-grid">
                <a href="https://www.imdb.com/title/tt2194499/" alt="About Time" target="_blank">
                    <div class="card">
                      <div class="wrapper">
                        <img src="https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_FMjpg_UX1000_.jpg" class="cover-image" />
                      </div>
                      <img src="../visuals/hobbies_interests/about_time_title.png" id="abouttimetitle" class="title" />
                      <img src="../visuals/hobbies_interests/about_time.png" id="abouttimechar" class="character" />
                    </div>
                  </a>
                  
                  <a href="https://www.imdb.com/title/tt16059146/?ref_=fn_all_ttl_1" alt="Parasite in Love" target="_blank">
                    <div class="card">
                      <div class="wrapper">
                        <img src="../visuals/hobbies_interests/parasite_in_love_cover.jpg" class="cover-image" />
                      </div>
                      <img src="../visuals/hobbies_interests/parasite_in_love_title.png" id="parasitetitle" class="title" />
                      <img src="../visuals/hobbies_interests/parasite_in_love.png" id="parasite" class="character" />
                    </div>
                  </a>
            </div>
        </div>

        <div class="div2">
            <div class="icon-text">
                <i class="fa-solid fa-video fa-10x"></i>
                <h2>Series</h2>
            </div>
            <div class="image-grid">
                <a href="https://www.imdb.com/title/tt2098220/" alt="HXH" target="_blank">
                    <div class="card">
                      <div class="wrapper">
                        <img src="../visuals/hobbies_interests/hxh_cover.jfif" class="cover-image" />
                      </div>
                      <img src="../visuals/hobbies_interests/hxh_title.png" id="hxhtitle" class="title" />
                      <img src="../visuals/hobbies_interests/hxh.png" id="hxh" class="character" />
                    </div>
                  </a>
                  
                  <a href="https://www.imdb.com/title/tt2560140/" alt="AOT" target="_blank">
                    <div class="card">
                      <div class="wrapper">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/61t9ie31jgL.jpg" class="cover-image" />
                      </div>
                      <img src="https://www.koeitecmoamerica.com/attackontitan/img/logo.png" id="aott" class="title" />
                      <img src="../visuals/hobbies_interests/aot.png" id="toa" class="character" />
                    </div>
                  </a>
            </div>
        </div>

        <div class="div3">
            <div class="icon-text">
                <i class="fa-solid fa-music fa-9x"></i>
                <h2>Music</h2>
            </div>
            <div class="image-grid">
                <a href="https://open.spotify.com/artist/3mIj9lX2MWuHmhNCA7LSCW?si=frfMhw35SSOlkSq7zh3RdA" alt="Matty" target="_blank">
                    <div class="card">
                      <div class="wrapper">
                        <img src="../visuals/hobbies_interests/mattyalbum.png" class="cover-image" />
                      </div>
                      <img src="../visuals/hobbies_interests/mattylogo.png" id="matty" class="title" />
                      <img src="../visuals/hobbies_interests/bastasilato.jpg" id="mattymatty" class="character" />
                    </div>
                  </a>
                  
                  <a href="https://open.spotify.com/artist/0NIPkIjTV8mB795yEIiPYL?si=hhYn22MgQjuO_Lam7CZWfg" alt="walley" target="_blank">
                    <div class="card">
                      <div class="wrapper">
                        <img src="../visuals/hobbies_interests/nothing.png" class="cover-image" />
                      </div>
                      <img src="https://cdn.campaigns.wmgconnect.com/uploads/wallowsheadersmall.png" class="title" />
                      <img src="../visuals/hobbies_interests/silananaman.png" id="wallows" class="character" />
                    </div>
                  </a>
            </div>
        </div>

        <div class="div4">
            <div class="icon-text">
                <i class="fa-solid fa-gamepad fa-10x"></i>
                <h2>Games</h2>
            </div>
            <div class="image-grid">
                <a href="https://tcgpocket.pokemon.com/en-us/" alt="Pokemon TCGP" target="_blank">
                    <div class="card">
                      <div class="wrapper">
                        <img src="../visuals/hobbies_interests/pokemon_cover.jpg" class="cover-image" />
                      </div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg/1200px-Pok%C3%A9mon_Trading_Card_Game_logo.svg.png" class="title" />
                      <img src="https://pocket.pokemongohub.net/_next/image?url=%2Ftcg-pocket%2Fcards%2Fa1%2Fwebp%2FcPK_20_000360_02_LIZARDONex_UR_M_M_en_US.webp&w=640&q=75" class="character" />
                    </div>
                  </a>
                  
                  <a href="https://telltale.com/the-wolf-among-us/" alt="TWAU" target="_blank">
                    <div class="card">
                      <div class="wrapper">
                        <img src="https://i.pinimg.com/736x/c1/80/9c/c1809c5778fb50ccd1698a94a5159b6b.jpg" class="cover-image" />
                      </div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Wolf_Among_Us_Logo.png/640px-The_Wolf_Among_Us_Logo.png" class="title" />
                      <img src="../visuals/hobbies_interests/twau.png" id="bigby" class="character" />
                    </div>
                  </a>
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

.bento-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    width: 100vw;
    padding: 20px;
}

.bento-box div {
    padding: 10px; /* Reduced padding */
    border-radius: 10px;
    text-align: center;
}

.div1 {
    background-color: var(--primary);
}

.div2 {
    background-color: var(--secondary);
}

.div3 {
    background-color: var(--dark-blue);
}

.div4 {
    background-color: var(--dark-purple);
}

.image-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.image-grid img {
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
}

.image-grid img:hover {
    transform: scale(1.1);
}

.card {
    width: calc(300px / 1.5);
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0 36px;
    perspective: 2500px;
    margin: 0 50px;
}

.cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.wrapper {
    transition: all 0.5s;
    position: absolute;
    width: 100%;
    z-index: -1;
}

.card:hover .wrapper {
    transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
    box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}

.wrapper::before,
.wrapper::after {
    content: "";
    opacity: 0;
    width: 100%;
    height: 80px;
    transition: all 0.5s;
    position: absolute;
    left: 0;
}

.wrapper::before {
    top: 0;
    height: 100%;
}

.wrapper::after {
    bottom: 0;
    opacity: 1;
}

.card:hover .wrapper::before,
.wrapper::after {
    opacity: 1;
}

.card:hover .wrapper::after {
    height: 120px;
}

.title {
    width: 100%;
    transition: transform 0.5s;
}

.title {
    display: block;
    filter: 
        drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.8)) 
        drop-shadow(-4px -4px 5px rgba(0, 0, 0, 0.8)) 
        drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.6));
}

.card:hover .title {
    transform: translate3d(0%, -50px, 100px);
}

.character {
    width: 90%;
    opacity: 0;
    transition: all 0.5s;
    position: absolute;
    z-index: -1;
}

.card:hover .character {
    opacity: 1;
    transform: translate3d(0%, -8%, 100px);
}

#parasite {
    width: 220px;
    bottom: 20px;
    filter: brightness(2);
}

#parasitetitle {
    width: 110px;
}

#hxhtitle {
    width: 130px;
    bottom: 10px;
}

#abouttimechar {
    width: 70%;
    height: auto;
}

#hxh {
    width: 100%;
}

#toa {
    width: 95%;
}

#hxhtitle {
    width: 130px;
    bottom: 10px;
}

#aott {
    width: 200px;
}

.character {
    filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.9));
}

i {
    color: var(--black);
    opacity: 0.7;
}

.icon-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
}

#bigby {
    width: 200px;
}

#bigby img,
#abouttimechar img {
    width: 200px;
    filter: brightness(2);
}

#matty {
    width: 220px;
}

#mattymatty {
    width: 280px;
}

#wallows {
    width: 250px;
}

/* Responsive */

@media (max-width: 480px) {
    .bento-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
    }
    
    .bento-box div {
        width: 90%;
    }
    
    .icon-text i {
        font-size: 6rem;
    }

    .card {
        max-width: 200px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .bento-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        padding: 15px;
    }
    
    .bento-box div {
        width: 45%;
        align-items: center;
    }
    
    .icon-text i {
        font-size: 6rem;
    }

    .card {
        min-width: 400px;
        left: 80px;
    }
    .title {
        max-width: 200px;
    }
    h2 {
        font-size: 5rem;
    }
    i {
        opacity: 0;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .bento-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        padding: 15px;
    }
    
    .bento-box div {
        width: 45%;
        align-items: center;
    }
    
    .icon-text i {
        font-size: 6rem;
    }

    .card {
        min-width: 400px;
        left: 80px;
    }
    .title {
        max-width: 200px;
    }
    h2 {
        font-size: 5rem;
    }
    i {
        opacity: 0;
    }
    .character{
        max-width: 200px;
    }
}
</style>