// SKILL
var profilSosial = document.querySelector(".profil-sosial");
var sectionSkill = document.querySelector(".skill");
var sectionKerja = document.querySelector(".kerja");
var sectionFormal = document.querySelector(".formal");
var sectionNonFormal = document.querySelector(".nonformal");
var sectionAplikasi = document.querySelector("#project .row");
var sectionBlog = document.querySelector("#blog .list-blog");

function renderSosial() {
  let sosial = [
    {
      app: "facebook",
      username: "rushjr13",
    },
    {
      app: "instagram",
      username: "rusland_s",
    },
    {
      app: "youtube",
      username: "channel/UCXkPQinNTa5H5gf0tOjlRSg",
    },
    {
      app: "tiktok",
      username: "@dm2675jz",
    },
  ];
  let listSosial = "";
  sosial.forEach((s) => {
    listSosial += `<a href="https://www.${s.app}.com/${s.username}" target="_blank" class="link-sosial"><i class="bi bi-${s.app}"></i></a>`;
  });
  profilSosial.innerHTML = listSosial;
}

function renderSkill() {
  let skill = [
    "PHP",
    "CSS",
    "HTML",
    "MySQL",
    "Marketing",
    "Akuntansi",
    "Collection",
    "MS. Office",
    "JavaScript",
    "Video Editor",
    "Desain Grafis",
    "Audio Production",
  ];
  let badgeSkill = "";
  for (let s = 0; s < skill.length; s++) {
    badgeSkill += `<span class="badge">#${skill[s]}</span>`;
  }
  sectionSkill.innerHTML = badgeSkill;
}

function renderKerja() {
  let kerja = [
    {
      waktu: "Feb - Agst 2022",
      jabatan: "Field Assets Management → Account Verificator",
      instansi: "PT. BFI Finance Indonesia Tbk. Cabang Gorontalo",
      deskripsi: [
        "- FIELD ASSET MANAGEMENT -",
        "Melakukan penagihan kepada nasabah yang menunggak angsuran lebih dari 1 - 90 hari",
        "Melakukan negosiasi dan pencarian solusi kepada nasabah yang gagal bayar angsuran",
        "Mengamankan aset agunan yang dikuasai oleh nasabah yang gagal bayar",
        "- ACCOUNT VERIFICATOR -",
        "Melakukan verifikasi data dan informasi calon debitur",
        "Memastikan calon debitur memenuhi syarat untuk mendapatkan bantuan dana dari perusahaan",
        "Memastikan data calon debitur terinput dengan baik sesuai form yang berlaku",
        "Melakukan follow up kepada nasabah yang ingin melakukan pengajuan pinjaman dana kembali",
      ],
    },
    {
      waktu: "Jan 2018 - Feb 2021",
      jabatan: "Staf Program → Admin Server LPSE",
      instansi: "Biro Pengadaan Setda Provinsi Gorontalo",
      deskripsi: [
        "- STAF PROGRAM -",
        "Menginput data program dan kegiatan kantor",
        "Menginput data kinerja program dan kegiatan kantor",
        "Memberikan masukkan berdasarkan evaluasi kinerja program dan kegiatan kantor",
        "- ADMIN SERVER LPSE -",
        "Menjaga aktifitas server agar berjalan dengan baik",
        "Memastikan segala jenis pengadaan barang dan jasa pemerintah Provinsi Gorontalo berjalan dengan lancar",
        "Membangun dan mengembangkan aplikasi pengadaan",
      ],
    },
    {
      waktu: "Jan 2014 - Des 2017",
      jabatan: "Staf Entri EMONEV & Pembantu Bendahara Pengeluaran",
      instansi: "Biro PP & Kesra Setda Provinsi Gorontalo",
      deskripsi: [
        "Menginput data program dan kegiatan kantor",
        "Menginput data kinerja program dan kegiatan kantor",
        "Memberikan masukkan berdasarkan evaluasi kinerja program dan kegiatan kantor",
        "Membantu Bendahara Pengeluaran dalam mengadministrasi dan pengelolaan keuangan kantor",
      ],
    },
    {
      waktu: "Mar - Sept 2013",
      jabatan: "Mantri Penagihan",
      instansi: "Koperasi Simpan Pinjam Karya Bersama",
      deskripsi: [
        "Mencari calon nasabah yang memerlukan dana untuk modal usahanya",
        "Melakukan verifikasi kelayakan calon nasabah yang ingin mengajukan pinjaman dana koperasi",
        "Melakukan penagihan kepada nasabah yang meminjam dana dari koperasi",
      ],
    },
    {
      waktu: "Mar - Agst 2012",
      jabatan: "Operator",
      instansi: "Fotocopy PURNAMA",
      deskripsi: [
        "Melayani konsumen yang ingin melakukan fotocopy dokumen",
        "Memastikan ketersediaan alat dan bahan untuk usaha",
      ],
    },
  ];
  let listKerja = "";
  kerja.forEach((k) => {
    listKerja += `<div class="list-kerja">
                    <span class="waktu">${k.waktu}</span>
                    <div class="deskripsi">
                        <span class="jabatan">${k.jabatan}</span>
                        <span class="instansi">${k.instansi}</span>
                    </div>`;
    if (k.deskripsi.length > 0) {
      listKerja += `<ul class="rincian">`;
      for (let i = 0; i < k.deskripsi.length; i++) {
        listKerja += `<li class="rincian-list">${k.deskripsi[i]}</li>`;
      }
      listKerja += `</ul>`;
    }
    listKerja += `</div>`;
  });
  sectionKerja.innerHTML = listKerja;
}

function renderFormal() {
  let formal = [
    {
      waktu: "2008 - 2011",
      sekolah: "SMA Negeri 1 Kabila (Jurusan IPA)",
      instansi: "Kab. Bone Bolango (Gorontalo)",
    },
    {
      waktu: "2005 - 2008",
      sekolah: "SMP Negeri 1 Suwawa",
      instansi: "Kab. Bone Bolango (Gorontalo)",
    },
    {
      waktu: "2000 - 2005",
      sekolah: "SDN 2 Boludawa",
      instansi: "Kab. Bone Bolango (Gorontalo)",
    },
  ];
  let listFormal = "";
  formal.forEach((f) => {
    listFormal += `<div class="list-pendidikan">
                    <span class="waktu">${f.waktu}</span>
                    <div class="deskripsi">
                        <span class="sekolah">${f.sekolah}</span>
                        <span class="instansi">${f.instansi}</span>
                    </div>
                </div>`;
  });
  sectionFormal.innerHTML = listFormal;
}

function renderNonFormal() {
  let nonformal = [
    {
      waktu: "September 2021",
      sekolah: "Seleksi Kompetensi Dasar",
      instansi: "BKN RI",
      img: "SKD BKN 2021.jpg",
    },
    {
      waktu: "April 2021",
      sekolah: "Kuasai Tekhnik Produksi Audio Digital untuk Pemula",
      instansi: "Skill Academy By Ruang Guru",
      img: "COE03.jpg",
    },
    {
      waktu: "April 2021",
      sekolah: "Data Statistika dan Data Science",
      instansi: "Skill Academy By Ruang Guru",
      img: "COE02.jpg",
    },
    {
      waktu: "April 2021",
      sekolah: "SEO 101 : Cara Membuat Website Eksis di Halaman Depan Google",
      instansi: "Skill Academy By Ruang Guru",
      img: "COE01.jpg",
    },
    {
      waktu: "2011",
      sekolah: "Pelatihan Komputer dan Internet",
      instansi: "Universitas Negeri Gorontalo",
      img: "Komputer.png",
    },
  ];
  let listNonFormal = "";
  nonformal.forEach((nf) => {
    listNonFormal += `<div class="list-pendidikan" data-img="assets/images/sertifikat/${nf.img}">
                          <span class="waktu" data-img="assets/images/sertifikat/${nf.img}">${nf.waktu}</span>
                          <div class="deskripsi" data-img="assets/images/sertifikat/${nf.img}">
                              <span class="sekolah" data-img="assets/images/sertifikat/${nf.img}">${nf.sekolah}</span>
                              <span class="instansi" data-img="assets/images/sertifikat/${nf.img}">${nf.instansi}</span>
                          </div>`;
    if (nf.img != "") {
      listNonFormal += `<img src="assets/images/sertifikat/${nf.img}" alt="${nf.sekolah}">`;
    }
    listNonFormal += `</div>`;
  });
  sectionNonFormal.innerHTML = listNonFormal;
}

function renderAplikasi() {
  let aplikasi = [
    {
      nama: "Indeks Masa Tubuh",
      img: "bmi.png",
      link: "bmi.html",
    },
    {
      nama: "Calculator",
      img: "calculator.png",
      link: "calculator.html",
    },
    {
      nama: "Calendar",
      img: "calendar.png",
      link: "calendar.html",
    },
    {
      nama: "Clock & Date",
      img: "clock.png",
      link: "clock.html",
    },
    {
      nama: "Countdown Timer",
      img: "countdown.png",
      link: "countdown.html",
    },
    {
      nama: "English Dictionary",
      img: "dictionary.png",
      link: "dictionary.html",
    },
    {
      nama: "Drawing",
      img: "draw.png",
      link: "draw.html",
    },
    {
      nama: "Key Code Detector",
      img: "key.png",
      link: "key.html",
    },
    {
      nama: "To Do List",
      img: "list.png",
      link: "list.html",
    },
    {
      nama: "Music Player",
      img: "music.png",
      link: "music.html",
    },
    {
      nama: "Password Generator",
      img: "passwordgenerator.png",
      link: "passwordgenerator.html",
    },
    {
      nama: "QR Code Generator",
      img: "qrgenerator.png",
      link: "qrgenerator.html",
    },
    {
      nama: "Text To Speech",
      img: "tts.png",
      link: "tts.html",
    },
    {
      nama: "Weather",
      img: "weather.png",
      link: "weather.html",
    },
  ];
  let listAplikasi = "";
  aplikasi.forEach((app) => {
    listAplikasi += `<div class="column">
                        <div class="app-card">
                            <img src="assets/images/project/${app.img}" alt="My Project" class="app-img">
                            <a href="${app.link}" class="app-name">${app.nama}</a>
                        </div>
                    </div>`;
  });
  sectionAplikasi.innerHTML = listAplikasi;
}

function renderBlog() {
  let blog = [
    // {
    //   title: "Blog Title",
    //   img: "blog.png",
    //   author: "Author",
    //   date: "Rabu, 31 Mei 2023",
    //   time: "00:00:00",
    //   like: 0,
    //   view: 0,
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus tempore odit qui corporis ea quo incidunt magnam commodi eius quos libero id, alias rem explicabo aliquid autem odio, necessitatibus at voluptate reprehenderit perferendis! Praesentium optio, labore nulla iste aspernatur exercitationem esse id, iusto assumenda voluptatum incidunt? Facilis sit consectetur ipsum eos deserunt dignissimos nam, necessitatibus aliquam porro, laboriosam quae molestiae amet molestias excepturi fugit rem saepe temporibus harum non eum et suscipit. Beatae, est deserunt qui et quam voluptatum aut impedit nostrum. Voluptas tempore corrupti commodi impedit nisi officiis obcaecati reiciendis repudiandae eius iusto, mollitia voluptatum. Quia, exercitationem doloremque.",
    // },
  ];
  let listBlog = "";
  blog.forEach((bl) => {
    listBlog += `<div class="card-blog">
                    <div class="card-blog-img">
                        <img src="assets/images/blog/${bl.img}" alt="Blog Image">
                    </div>
                    <div class="card-blog-body">
                        <a href="" class="blog-title">${bl.title}</a>
                        <div class="blog-data">
                            <span class="blog-author"><i class="bi bi-person-fill"></i>${bl.author}</span>
                            <span class="blog-date"><i class="bi bi-calendar-check-fill"></i>${bl.date}</span>
                            <span class="blog-time"><i class="bi bi-clock-fill"></i>${bl.time}</span>
                            <span class="blog-likes"><i class="bi bi-heart-fill"></i>${bl.like}</span>
                            <span class="blog-views"><i class="bi bi-eye-fill"></i>${bl.view}</span>
                        </div>
                        <p class="blog-text">${bl.content}</p>
                    </div>
                </div>`;
  });
  sectionBlog.innerHTML = listBlog;
}

renderSosial();
renderSkill();
renderKerja();
renderFormal();
renderNonFormal();
renderAplikasi();
renderBlog();

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