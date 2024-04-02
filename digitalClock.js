const hours = document.getElementById("hours");

const minutes = document.getElementById("minutes");

const seconds = document.getElementById("seconds");
const copyRights = document.getElementById("cobyRight");
const ambm = document.getElementById("ambm");

const secondUpdate = function () {
  const time = new Date();

  seconds.innerText = time.getSeconds();
  minutes.innerText = time.getMinutes();
  hours.innerText = time.getHours();
  copyRights.innerHTML = `${time.getFullYear()}`;

  if (hours.innerText > 12) {
    hours.innerText = hours.innerText - 12;
    ambm.innerText = "PM";
  }

  setTimeout(secondUpdate, 1000);
};

secondUpdate();
