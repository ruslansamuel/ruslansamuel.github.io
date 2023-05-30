const getRandomColor = () => Math.floor(Math.random() * 0xffffff).toString(16);

const generateGradient = () => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();

  document.body.style.background = `linear-gradient(to left top, #${color1}, #${color2}) no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
};
generateGradient();

const renderMenu = () => {
  var hal = [
    {
      judul: "Landing Page",
      link: "../",
    },
    {
      judul: "Index Masa Tubuh",
      link: "bmi.html",
    },
    {
      judul: "Calculator",
      link: "calculator.html",
    },
    {
      judul: "Calendar",
      link: "calendar.html",
    },
    {
      judul: "Clock & Time",
      link: "clock.html",
    },
    {
      judul: "Countdown Timer",
      link: "countdown.html",
    },
    {
      judul: "Dictionary",
      link: "dictionary.html",
    },
    {
      judul: "Drawing App",
      link: "draw.html",
    },
    {
      judul: "Key Code Detection",
      link: "key.html",
    },
    {
      judul: "To Do List",
      link: "list.html",
    },
    {
      judul: "Music App",
      link: "music.html",
    },
    {
      judul: "Password Generator",
      link: "passwordgenerator.html",
    },
    {
      judul: "QR Code Generator",
      link: "qrgenerator.html",
    },
    {
      judul: "Text To Speech",
      link: "tts.html",
    },
    {
      judul: "Weather",
      link: "weather.html",
    },
  ];
  let listMenu = `<button class="menu-button" aria-label="Menu Button">
                <div class="menu-icon-wrapper">
                   <i class="bi bi-list"></i>
                </div>
            </button>
            <ul class="menu-button-list">`;
  hal.forEach(function (h) {
    if ("/" + h.link == window.location.pathname) {
      listMenu += `<li class="menu-button-list-item active">
                          <a href="${h.link}">${h.judul}</a>
                      </li>`;
    } else {
      listMenu += `<li class="menu-button-list-item">
                          <a href="${h.link}">${h.judul}</a>
                      </li>`;
    }
  });
  listMenu += `</ul>`;
  document.querySelector(".list-container").innerHTML += listMenu;
};

renderMenu();

document.querySelector(".menu-button").addEventListener("click", function () {
  document.querySelector(".list-container").classList.toggle("active");
});

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back Please :(";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});
