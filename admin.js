var sectionPengirim = document.querySelector(".pengirim");
var menuPesan = document.querySelector(".jlhPesan ");

function renderPengirim() {
  let pengirim = [
    {
      id: 123451,
      nama: "Nama Pengirim 1",
      email: "email1@email.com",
      nohp: "081234567890",
      pesan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit, voluptatum hic eaque animi nihil expedita non cupiditate praesentium ducimus?",
      tanggal: "Kamis, 08 Juni 2023",
      jam: "00:00:00 WITA",
    },
    {
      id: 123452,
      nama: "Nama Pengirim 2",
      email: "email2@email.com",
      nohp: "081234567891",
      pesan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum distinctio eius fugit ab, dolore doloremque nulla molestiae veniam voluptatem odio blanditiis dolorum excepturi delectus molestias fugiat ad quas voluptates? Repellendus!",
      tanggal: "Jumat, 09 Juni 2023",
      jam: "01:00:00 WITA",
    },
    {
      id: 123453,
      nama: "Nama Pengirim 3",
      email: "email3@email.com",
      nohp: "081234567892",
      pesan:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae illum quibusdam commodi distinctio incidunt ut labore, sed, officiis architecto quis voluptatum veniam vel ad fugiat facere voluptas quasi cum aliquam dignissimos mollitia velit? Ab, amet quasi, distinctio numquam possimus est illo repellat eius expedita, totam velit maiores deserunt nobis repellendus fuga molestias placeat voluptates! Harum labore illo voluptates? Quidem ad natus, fugiat eaque nobis excepturi exercitationem corporis aperiam deserunt omnis maxime alias soluta tempora hic dolorem dicta explicabo amet suscipit nihil illo voluptate ab. Iusto temporibus nemo ducimus ab porro perspiciatis libero, quia perferendis culpa consectetur impedit repudiandae autem?",
      tanggal: "Sabtu, 10 Juni 2023",
      jam: "02:00:00 WITA",
    },
  ];
  let listPengirim = "";
  pengirim.forEach((p) => {
    listPengirim += `<li class="list-pengirim" data-id="${p.id}" data-nama="${p.nama}" data-email="${p.email}" data-nohp="${p.nohp}" data-pesan="${p.pesan}" data-tanggal="${p.tanggal}" data-jam="${p.jam}">
                        <p class="fw-bold">${p.nama}</p>
                        <p class="small"><i class="bi bi-envelope"></i> ${p.email}</p>
                        <p class="small"><i class="bi bi-whatsapp"></i> ${p.nohp}</p>
                        <span class="time"><i class="bi bi-calendar-check"></i> ${p.tanggal} <br> <i class="bi bi-clock"></i> ${p.jam}</span>
                    </li>`;
  });
  sectionPengirim.innerHTML = listPengirim;
  menuPesan.innerHTML = pengirim.length;
}

renderPengirim();

let listKirim = document.querySelectorAll(".list-pengirim");
let displayPesan = document.querySelector(".pesan-display");

listKirim.forEach((lk) => {
  lk.addEventListener("click", () => {
    let cardPesan = ` <div class="card-pesan">
                        <div class="card-pesan-header">
                            <div class="card-pesan-user">
                                <i class="bi bi-person-circle"></i>
                                <div>
                                    <p class="fw-bold">${lk.dataset.nama}</p>
                                    <p class="small">${lk.dataset.tanggal} - ${lk.dataset.jam}</p>
                                </div>
                            </div>
                            <div class="button-group">
                                <button type="button"><i class="bi bi-reply"></i></button>
                                <button type="button"><i class="bi bi-heart"></i></button>
                                <button type="button"><i class="bi bi-trash3"></i></button>
                            </div>
                        </div>
                        <div class="card-pesan-body">${lk.dataset.pesan}</div>
                    </div>`;
    displayPesan.innerHTML = cardPesan;
  });
});

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back Please :(";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".typewrite > .wrap { border-right: 0.08em solid #fff; font-size: 3rem; color: #543210; cursor: default;}";
  document.body.appendChild(css);
};

let nfList = document.querySelectorAll(".nonformal .list-pendidikan");
nfList.forEach((nfl) => {
  nfl.addEventListener("click", (nf) => {
    window.open(nf.target.dataset.img, "_blank");
  });
});
