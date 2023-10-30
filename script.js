const inputText = document.getElementById("inputText");
const addButton = document.getElementById("addButton");
const noteList = document.getElementById("noteList");
const dateTime = document.getElementById("dateTime");

//! NOTES /////////////////////////////

addButton.addEventListener("click", () => {
  const text = inputText.value.trim();
  if (text === "") return;

  let list = document.createElement("li");
  list.innerHTML = `<span >${text}</span>
  <button class="delete">&#x2715;</button`;

  noteList.appendChild(list);

  const deleteBtn = list.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    noteList.removeChild(list);
  });

  inputText.value = "";
});

//! COUNTDOWN ///////////////////////////

function updateCountDown() {
  let countDownDate = new Date(dateTime.value).getTime();
  if (dateTime.value === "") return;

  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const finished = document.getElementById("finished");

  if (distance < 0) {
    document.getElementById("countDown").style.display = "none";
    finished.style.display = "block";
    finished.innerHTML = "Time's Up !!";
  } else {
    finished.style.display = "none";
    document.getElementById("countDown").style.display = "block";
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
}

dateTime.addEventListener("change", updateCountDown),
  setInterval(updateCountDown, 1000);

//! CLOCK////////////////////////

function displayTime() {
  const dateTime = new Date();
  let hrs = dateTime.getHours();
  let mins = dateTime.getMinutes();
  let secs = dateTime.getSeconds();
  const session = document.getElementById("session");

  if (hrs > 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hrs > 12) hrs = hrs - 12;

  if (hrs < 10) hrs = "0" + hrs;
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + secs;

  document.getElementById("hr").innerHTML = hrs;
  document.getElementById("mi").innerHTML = mins;
  document.getElementById("sec").innerHTML = secs;
}

setInterval(displayTime, 1000);
