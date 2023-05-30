// SKILL
var profilSosial = document.querySelector(".profil-sosial");
var sectionSkill = document.querySelector(".skill");
var sectionKerja = document.querySelector(".kerja");
var sectionFormal = document.querySelector(".formal");
var sectionNonFormal = document.querySelector(".nonformal");
var sectionAplikasi = document.querySelector("#aplikasi .row");

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
    },
    {
      waktu: "Jan 2018 - Feb 2021",
      jabatan: "Staf Program → Admin Server LPSE",
      instansi: "Biro Pengadaan Setda Provinsi Gorontalo",
    },
    {
      waktu: "Jan 2014 - Des 2017",
      jabatan: "Staf Entri EMONEV & Pembantu Bendahara Pengeluaran",
      instansi: "Biro PP & Kesra Setda Provinsi Gorontalo",
    },
    {
      waktu: "Mar - Sept 2013",
      jabatan: "Mantri Penagihan",
      instansi: "Koperasi Simpan Pinjam Karya Bersama",
    },
    {
      waktu: "Mar - Agst 2012",
      jabatan: "Operator",
      instansi: "Fotocopy PURNAMA",
    },
  ];
  let listKerja = "";
  kerja.forEach((k) => {
    listKerja += `<div class="list-kerja">
                    <span class="waktu">${k.waktu}</span>
                    <div class="deskripsi">
                        <span class="jabatan">${k.jabatan}</span>
                        <span class="instansi">${k.instansi}</span>
                    </div>
                </div>`;
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
    },
    {
      waktu: "April 2021",
      sekolah: "Kuasai Tekhnik Produksi Audio Digital untuk Pemula",
      instansi: "Skill Academy By Ruang Guru",
    },
    {
      waktu: "April 2021",
      sekolah: "Data Statistika dan Data Science",
      instansi: "Skill Academy By Ruang Guru",
    },
    {
      waktu: "April 2021",
      sekolah: "SEO 101 : Cara Membuat Website Eksis di Halaman Depan Google",
      instansi: "Skill Academy By Ruang Guru",
    },
    {
      waktu: "2011",
      sekolah: "Pelatihan Komputer dan Internet",
      instansi: "Universitas Negeri Gorontalo",
    },
  ];
  let listNonFormal = "";
  nonformal.forEach((nf) => {
    listNonFormal += `<div class="list-pendidikan">
                    <span class="waktu">${nf.waktu}</span>
                    <div class="deskripsi">
                        <span class="sekolah">${nf.sekolah}</span>
                        <span class="instansi">${nf.instansi}</span>
                    </div>
                </div>`;
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
      nama: "Calendar",
      img: "clock.png",
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

renderSosial();
renderSkill();
renderKerja();
renderFormal();
renderNonFormal();
renderAplikasi();

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back Please :(";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});
