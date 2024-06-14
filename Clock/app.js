let body = document.querySelector("body");
let out = document.getElementsByClassName("clock")[0];
let weekDay = document.getElementsByClassName("day")[0];

function showtime() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let session = "PM";

  if (h < 12) {
    session = "AM";
    if (h === 0) {
      h = 12;
      day(a);
    }
  } else if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " " + session;
  out.innerText = time
  setTimeout(showtime, 1000);
}

const day = (wd) => {
  let d = wd.getDay();
  if (d === 0) weekDay.innerText = "Sunday"
  else if (d === 1) weekDay.innerText = "Monday"
  else if (d === 2) weekDay.innerText = "Tuesday"
  else if (d === 3) weekDay.innerText = "Wednesday"
  else if (d === 4) weekDay.innerText = "Thursday"
  else if (d === 5) weekDay.innerText = "Friday"
  else if (d === 6) weekDay.innerText = "Saturday"
};

body.addEventListener("onload", showtime());
let a = new Date();
body.addEventListener("onload", day(a));
