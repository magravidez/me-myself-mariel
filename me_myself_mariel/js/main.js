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