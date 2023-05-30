let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

let upcomingDate = new Date("2023-12-13 00:00:00");

setInterval(() => {
  let currentDate = new Date();
  let diff = upcomingDate.getTime() - currentDate;
  let daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
  var textUpcoming = document.querySelector(".container .text-upcoming");
  var textDay = document.querySelector(".column #days");
  var textHour = document.querySelector(".column #hours");
  var textMinute = document.querySelector(".column #minutes");
  var textSecond = document.querySelector(".column #seconds");

  textUpcoming.innerHTML =
    hari[upcomingDate.getDay()] +
    ", " +
    (upcomingDate.getDate() < 10
      ? "0" + upcomingDate.getDate()
      : upcomingDate.getDate()) +
    " " +
    bulan[upcomingDate.getMonth()] +
    " " +
    upcomingDate.getFullYear() +
    " - " +
    (upcomingDate.getHours() < 10
      ? "0" + upcomingDate.getHours()
      : upcomingDate.getHours()) +
    ":" +
    (upcomingDate.getMinutes() < 10
      ? "0" + upcomingDate.getMinutes()
      : upcomingDate.getMinutes()) +
    ":" +
    (upcomingDate.getSeconds() < 10
      ? "0" + upcomingDate.getSeconds()
      : upcomingDate.getSeconds()) +
    " WITA";
  textDay.innerHTML = daysLeft;
  textHour.innerHTML = hoursLeft;
  textMinute.innerHTML = minutesLeft;
  textSecond.innerHTML = secondsLeft;

  // if(secondsLeft < 0){
  //     stopInterval();
  // }
}, 1000);
