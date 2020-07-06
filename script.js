let fact = document.querySelector("#fact");

let numberfact = document.getElementById("fact-text");
let datefact = document.getElementById("fact-date");
document
  .getElementById("numberbutton")
  .addEventListener("click", getfactFetchnumber);
document
  .getElementById("datebutton")
  .addEventListener("click", getfactFetchdate);
//Using Ajax
/* function getfactAjax() {
          let number = document.getElementById("numberinput").value;
          let xhr = new XMLHttpRequest();
          xhr.open("GET", `http://numbersapi.com/${number}`);

          xhr.onload = function () {
            if (this.status == 200 && number != "") {
              fact.style.display = "block";
              text.innerHTML = this.responseText;
            } else {
              console.log("error");
            }
          };
          xhr.onerror = function () {
            console.log("Error");
          };
          xhr.send();
        } */
function getfactFetchnumber() {
  let number = document.getElementById("numberinput").value;
  if (number != "") {
    fetch(`http://numbersapi.com/${number}`)
      .then((res) => res.text())
      .then((data) => {
        fact.style.display = "block";
        numberfact.innerText = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
function getfactFetchdate() {
  const fulldate = new Date(document.getElementById("dateinput").value);

  console.log(fulldate);
  let month = fulldate.getMonth() + 1;
  let date = fulldate.getDate();
  console.log(month);
  console.log(date);
  if (fulldate != "Invalid Date") {
    fetch(`http://numbersapi.com/${month}/${date}/date`)
      .then((res) => res.text())
      .then((data) => {
        factdate.style.display = "block";
        datefact.innerText = data;
      });
  }
}
