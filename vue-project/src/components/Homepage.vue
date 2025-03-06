<template>
  <div class="bento-box">
    <div class="bento-boxes">
      <div class="bb-me-myself-mariel">
        <img src="../visuals/homepage/mag_logo.png" alt="Mariel's Logo">
        <div>
          <h1>ME, MYSELF, & MARIEL</h1>
          <p>
            Hello, world!<br>
            Feel free to explore my website.
          </p>
        </div>
      </div>

      <div class="bb-picture">
        <img src="../visuals/homepage/mariel.png" alt="Mariel">
      </div>

      <div class="bb-about-me">
        <h2>ABOUT ME</h2>
        <p>Get to know who I am! Discover what makes me, me.</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/not.mrlgrvdzzzz" target="_blank">
            <i class="fa-brands fa-facebook fa-4x"></i>
          </a>
          <a href="https://www.instagram.com/not.mrlgrvdzzzz" target="_blank">
            <i class="fa-brands fa-square-instagram fa-4x"></i>
          </a>
          <a href="https://open.spotify.com/user/31v4siypf3p7qxpvqfmemo2kkute?si=1a4510a4ab5f41bb" target="_blank">
            <i class="fa-brands fa-spotify fa-4x"></i>
          </a>
          <a href="https://www.linkedin.com/in/marielagravidez" target="_blank">
            <i class="fa-brands fa-linkedin fa-4x"></i>
          </a>
          <a href="https://github.com/magravidez" target="_blank">
            <i class="fa-brands fa-github fa-4x"></i>
          </a>
        </div>
        <!-- Use absolute path for CV and internal links if needed -->
        <router-link to="/about-me" class="navigate" aria-label="Go to About Me page">
        <span class="material-symbols-outlined">open_in_new</span>
        </router-link>
      </div>

      <div class="bb-it-experience">
        <i class="fa-solid fa-computer fa-8x"></i>
        <div>
          <h2>IT EXPERIENCE</h2>
          <p>As an IT student, discover the programming languages and tools I use.</p>
          <router-link to="/it-experience" class="navigate" aria-label="Go to IT Experience page">
          <span class="material-symbols-outlined">open_in_new</span>
          </router-link>
        </div>
      </div>

      <div class="bb-hobbies-interests">
        <i class="fa-solid fa-heart fa-8x"></i>
        <div>
          <h2>HOBBIES & INTERESTS</h2>
          <p>Maybe we have something in common! Discover what I do when I'm bored.</p>
          <router-link to="/hobbies-interests" class="navigate" aria-label="Go to Hobbies & Interests page">
          <span class="material-symbols-outlined">open_in_new</span>
          </router-link>
        </div>
      </div>

      <div class="bb-education-achievements">
        <i class="fa-solid fa-book fa-8x"></i>
        <div>
          <h2>EDUCATION & ACHIEVEMENTS</h2>
          <p>View my CV and discover the goals I've achieved on my academic journey.</p>
          <a href="../assets/MarielAGravidez_CV.pdf" class="navigate" aria-label="Download CV">
            <span class="material-symbols-outlined">download</span>
          </a>                                 
        </div>
      </div>    

      <div class="bb-picture-gallery">
        <i class="fa-solid fa-camera-retro fa-8x"></i>
        <div>
          <h2>PICTURE GALLERY</h2>
          <p>I take pictures so I can remember! Discover my favorite pictures.</p>
          <router-link to="/picture-gallery" class="navigate" aria-label="Go to Picture Gallery page">
          <span class="material-symbols-outlined">open_in_new</span>
            </router-link>
        </div>
      </div>

      <div class="bb-resources">
        <div>
          <h1>RESOURCES</h1>
          <p>Here are the documents, materials, and websites that have helped me in development.</p>
          <a href="https://docs.google.com/spreadsheets/d/1NrIK5CVmwvTubsgwq6SDBqJuq9Git7-GIEMmhJhHj8g/edit?usp=sharing"
             target="_blank" rel="noopener noreferrer" class="navigate" aria-label="Resources">
            <span class="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
      </div>

      <div class="bb-feedback">
        <div>
          <h1>FEEDBACK</h1>
          <p>What do you think about my website? I'd love to hear your thoughts!</p>
          <a class="navigate" aria-label="Submit a Feedback">
            <span class="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
      </div>
    </div>

    <div id="theme-modal" class="modal">
      <div class="modal-content">
        <h3>Welcome!</h3>
        <p>For the best experience, view this website on a laptop. You'll appreciate the features more!</p>
        <p>Before we begin, please choose a theme:</p>
        <button id="light-mode-btn">Light Mode</button>
        <button id="dark-mode-btn">Dark Mode</button>
      </div>
    </div>

    <div id="feedbackModal" class="modal-feedback">
      <div class="modal-content-feedback">
        <span class="close"><i class="fa-solid fa-xmark"></i></span>
        <h2>Feedback</h2>
        <form id="feedbackForm">
          <label for="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          <label for="favPage">What is your favorite page on my website, and why?</label>
          <select id="favPage" name="favPage" required>
            <option value="" disabled selected>Select a page</option>
            <option value="Homepage">Homepage</option>
            <option value="About Me">About Me</option>
            <option value="IT Experience">IT Experience</option>
            <option value="Hobbies & Interests">Hobbies & Interests</option>
            <option value="Education & Achievements">Education & Achievements</option>
            <option value="Picture Gallery">Picture Gallery</option>
          </select>
          <input type="text" id="favReason" name="favReason" placeholder="Tell me why..." required>
          <label for="improve">What is one thing you think could be improved on the website?</label>
          <textarea id="improve" name="improve" required></textarea>
          <label for="comments">Other Comments/Suggestions:</label>
          <textarea id="comments" name="comments"></textarea>
          <button type="submit">Submit</button>
        </form>
        <p id="thankYouMessage" class="hidden">Thank you very much!</p>
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
    filterSelection("all");
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
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
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
    overflow: hidden;
}

.bento-box {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 20px;
    height: 100vh;
    width: 100vw;
    padding: 20px;
}

.bento-boxes {
    display: contents;
}

.bento-box .bento-boxes>div {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: left;
    justify-content: left;
    font-size: 1.5rem;
    border-radius: 10px;
    padding: 25px;
    opacity: 1;
    transition: all 0.3s ease-in-out;
}

.bento-box .bento-boxes:hover>div {
    opacity: 0.45;
}

.bento-box .bento-boxes>.bb-me-myself-mariel:hover {
    transform: scale(1.05);
    background-color: var(--dark-purple);
    opacity: 1;
}

.bento-box .bento-boxes>.bb-picture:hover,
.bento-box .bento-boxes>.bb-about-me:hover,
.bento-box .bento-boxes>.bb-feedback:hover,
.bento-box .bento-boxes>.bb-resources:hover {
    transform: scale(1.05);
    background-color: var(--primary);
    opacity: 1;
}

.bento-box .bento-boxes>.bb-hobbies-interests:hover,
.bento-box .bento-boxes>.bb-education-achievements:hover {
    transform: scale(1.05);
    background-color: var(--dark-blue);
    opacity: 1;
}

.bento-box .bento-boxes>.bb-it-experience:hover,
.bento-box .bento-boxes>.bb-picture-gallery:hover {
    transform: scale(1.05);
    background-color: var(--secondary);
    opacity: 1;
}

.bb-me-myself-mariel {
    background-color: var(--dark-purple);
    grid-column: span 4 / span 4;
    grid-row: span 2 / span 2;
    grid-column-start: 3;
    grid-row-start: 3;
}

.bb-picture {
    background-color: var(--primary);
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 7;
    grid-row-start: 3;
}

.bb-about-me {
    background-color: var(--primary);
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 1;
    grid-row-start: 3;
}

.bb-it-experience {
    background-color: var(--secondary);
    grid-column: span 3 / span 3;
    grid-row: span 2 / span 2;
    grid-column-start: 1;
    grid-row-start: 1;
}

.bb-hobbies-interests {
    background-color: var(--dark-blue);
    grid-column: span 3 / span 3;
    grid-row: span 2 / span 2;
    grid-column-start: 6;
    grid-row-start: 1;
}

.bb-education-achievements {
    background-color: var(--dark-blue);
    grid-column: span 3 / span 3;
    grid-row: span 2 / span 2;
    grid-column-start: 1;
    grid-row-start: 5;
}

.bb-picture-gallery {
    background-color: var(--secondary);
    grid-column: span 3 / span 3;
    grid-row: span 2 / span 2;
    grid-column-start: 6;
    grid-row-start: 5;
}

.bb-resources {
    background-color: var(--primary);
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 4;
    grid-row-start: 1;
}

.bb-feedback {
    background-color: var(--primary);
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 4;
    grid-row-start: 5;
}

.navigate {
    position: absolute;
    bottom: 10px;
    right: 10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.bento-box .bento-boxes>div:hover .navigate {
    opacity: 1;
    transform: scale(1.2);
    border-radius: 50%;
}

.navigate {
    font-size: 1000px;
    text-decoration: none;
    display: inline-flex;
}

.navigate span:hover {
    color: var(--orange)
}

.material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-size: 50px !important;
    color: var(--white);
    font-variation-settings:
        'FILL' 0,
        'wght' 700,
        'GRAD' 0,
        'opsz' 48;
}

.social-icons i {
    font-size: 45px;
    color: var(--white);
    margin-top: 15px;
    margin-right: 10px;
    transition: color 0.3s ease-in-out;
}

.social-icons i:hover {
    color: var(--orange);
}

.bb-me-myself-mariel,
.bb-it-experience,
.bb-hobbies-interests,
.bb-education-achievements,
.bb-picture-gallery,
.bb-resources,
.bb-feedback {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    padding: 20px;
    gap: 20px;
}

.bb-me-myself-mariel div,
.bb-it-experience div,
.bb-hobbies-interests div,
.bb-education-achievements div,
.bb-picture-gallery div,
.bb-resources div,
.bb-feedback div {
    flex: 1;
    max-width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
}

.bb-me-myself-mariel i,
.bb-it-experience i,
.bb-hobbies-interests i,
.bb-education-achievements i,
.bb-picture-gallery i,
.bb-resources i,
.bb-feedback i {
    color: var(--black);
    opacity: 0.7;
}

.bb-me-myself-mariel img {
    width: 40%;
    height: auto;
    margin: 20px;
}

.bb-picture {
    position: relative;
}

.bb-picture img {
    position: absolute;
    bottom: 0;
    width: 85%;
    height: auto;
    z-index: 1;
}

.modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(53, 56, 57, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.modal-content {
    max-width: 400px;
    background: var(--primary);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.dark-mode {
    background: var(--black);
}

.dark-mode .modal-content {
    background: var(--black);
}

.modal p {
    font-size: 1.5rem;
}

#light-mode-btn {
    width: 130px;
    height: 40px;
    font-family: Verdana, Sans-Serif;
    border-radius: 8px;
    border: none;
    background-color: var(--white);
    color: var(--black);
    margin: 20px 10px 0;
}

#dark-mode-btn {
    width: 130px;
    height: 40px;
    font-family: Verdana, Sans-Serif;
    border-radius: 8px;
    border: none;
    background-color: var(--black);
    color: var(--white);
    margin: 20px 10px 0;
}

.modal-feedback {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53, 56, 57, 0.8);
}

.modal-content-feedback {
    background-color: var(--primary);
    padding: 20px;
    margin: 10% auto;
    width: 40%;
    border-radius: 10px;
    text-align: center;
    position: relative;
    overflow: scroll;
}

.close {
    color: var(--white);
    position: absolute;
    top: 4px;
    right: 10px;
    font-size: 40px;
    cursor: url('../visuals/cursor_pointer.png'), pointer;
}

label {
    display: block;
    font-family: Verdana, Sans-Serif;
    font-size: 1.5rem;
    color: var(--white);
    text-align: left;
    margin: 0;
    padding: 0;
}

input,
select,
textarea {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

select,
label {
    cursor: url('../visuals/cursor_default.png'), default;
}

button[type="submit"] {
    font-family: Verdana, Sans-Serif;
    background-color: var(--white);
    color: var(--primary);
    border: none;
    padding: 10px 20px;
    padding-top: 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: 0.3s;
    cursor: url('../visuals/cursor_pointer.png'), pointer;
}

button[type="submit"]:hover {
    background-color: var(--dark-blue);
    color: var(--white);
}

.hidden {
    display: none;
}

#thankYouMessage {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: var(--secondary);
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

textarea {
    width: 100%;
    height: 100px;
    resize: none;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.5rem;
}

select option {
    color: var(--primary);
}

label {
    padding-top: 20px;
}

button {
    margin-top: 15px;
    margin-bottom: 10px;
}

/* Mobile (max-width: 480px) */
@media (max-width: 480px) {
    html, body {
        overflow: scroll;
    }
    .bento-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        padding: 10px;
    }
    .bento-box .bento-boxes > div {
        width: 100%;
        padding: 15px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .bb-picture img {
        width: 50%;
    }
    h1 {
        font-size: 5rem;
    }
    h2 {
        font-size: 4rem;
    }
    p {
        font-size: 1.3rem;
    }
    .navigate {
        opacity: 1;
        width: 10px;
        right: 40px;
        transform: scale(0.7);
    }
    .navigate span{
        color: var(--orange);
    }
    .bb-education-achievements, .bb-hobbies-interests, .bb-it-experience, .bb-picture {
        min-height: 200px;
    }
    .bb-resources, .bb-feedback {
        min-height: 150px;
    }
    .modal-content-feedback {
        width: 350px;
    }
}

/* Tablet (481px - 768px) */
@media (min-width: 481px) and (max-width: 768px) {
    html, body {
        overflow: scroll;
    }
    .bento-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        width: 100%;
        padding: 15px;
    }
    .bento-box .bento-boxes > div {
        width: 90%;
        padding: 20px;
        justify-content: center;
        align-items: center;
    }
    .bb-picture img {
        width: 50%;
    }
    h1 {
        font-size: 6rem;
    }
    h2 {
        font-size: 5rem;
    }
    p {
        font-size: 2rem;
    }
    .navigate {
        opacity: 1;
        width: 10px;
        right: 40px;
        transform: scale(0.7);
    }
    .navigate span{
        color: var(--orange);
    }
    .bb-education-achievements, .bb-hobbies-interests, .bb-it-experience {
        min-height: 200px;
    }
    .bb-picture {
        min-height: 300px;
    }
    .bb-resources, .bb-feedback {
        min-height: 150px;
    }
    .modal-content-feedback {
        width: 450px;
    }
}

/* Small Desktop (769px - 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
    html, body {
        overflow: scroll;
    }
    .bento-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        width: 100%;
        padding: 15px;
    }
    .bento-box .bento-boxes > div {
        width: 100%;
        padding: 25px;
    }
    .bb-picture img {
        width: 45%;
        left: 180px;
    }
    .navigate {
        opacity: 1;
        width: 10px;
        right: 40px;
        transform: scale(0.7);
    }
    .navigate span{
        color: var(--orange);
    }
    .bb-education-achievements, .bb-hobbies-interests, .bb-it-experience {
        min-height: 200px;
    }
    .bb-picture {
        min-height: 300px;
    }
    .bb-resources, .bb-feedback {
        min-height: 150px;
    }
    h1 {
        font-size: 7rem;
    }
    h2 {
        font-size: 5.5rem;
    }
    p {
        font-size: 2.2rem;
    }
}

@media (min-width: 1025px) and (max-width: 1450px) {
    h1 {
        font-size: 5rem;
    }
    h2 {
        font-size: 4rem;
    }
    p {
        font-size: 2rem;
    }
    .social-icons i {
        font-size: 40px;
    }
    .navigate span{
        transform: scale(0.7);
    }
}
</style>