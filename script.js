$(document).ready(function () {
  console.log("ready")
})//check if document ready

/*
status 0 = normal
status 1 = makan
status 2 = tidur
status 3 = ngobat
status 4 = main
*/
var charStatus = 0

//var untuk tambah kurang stats konstan
var decMakan = 0.5
var decMain = 0
var decTidur = 0.5
var decHealth = 0

var incMakan = 0
var incMain = 0
var incTidur = 0
var incHealth = 0
var incLevel = 0.5

const round = Math.round

//get value dari masing-masing stats
let wlevel = document.getElementById("level")
let vlevel = round(document.getElementById("level").ariaValueNow, 0)
let wmakan = document.getElementById("makan")
let vmakan = round(document.getElementById("makan").ariaValueNow, 0)
let wtidur = document.getElementById("tidur")
let vtidur = round(document.getElementById("tidur").ariaValueNow, 0)
let wobat = document.getElementById("obat")
let vobat = round(document.getElementById("obat").ariaValueNow, 0)
let wmain = document.getElementById("main")
let vmain = round(document.getElementById("main").ariaValueNow, 0)

function getCharacter() {
  localStorage.setItem("character", document.querySelector(".carousel-item.active").querySelector("img").getAttribute("src"))
  localStorage.setItem("nama", document.getElementById("namaBang").value)
}

//ambil dari localstorage
var nama = localStorage.getItem("nama")
var character = localStorage.getItem("character")

//checking jika data sudah masuk ke home
console.log(character)
console.log(nama)

//set character di home
var charTemp = character;
var activeChar = document.getElementById("charView")

activeChar.setAttribute("src", charTemp)

const btnMakan = document.querySelector("#btnMakan")
const btnTidur = document.querySelector("#btnTidur")
const btnMain = document.querySelector("#btnMain")
const btnObat = document.querySelector("#btnObat")

var makanClicked = true;
var tidurClicked = true;
var mainClicked = true;
var obatClicked = true;

var level = 1;

//code untuk gonta-ganti aktivitas
btnMakan.addEventListener("click", function(){
  tidurClicked=true
  mainClicked=true  
  obatClicked=true  

  if(makanClicked){
    //set character ke character makan
    //tambah sfx makan
    charStatus = 1
  }else{
    //set character ke character awal
    charStatus = 0
  }
  makanClicked = !makanClicked
})

btnTidur.addEventListener("click", function () {
  makanClicked = true
  mainClicked = true
  obatClicked = true

  if (tidurClicked) {
    //set character ke character tidur
    //tambah sfx tidur
    charStatus = 2
  } else {
    //set character ke character awal
    charStatus = 0
  }
  tidurClicked = !tidurClicked
})

btnObat.addEventListener("click", function () {
  makanClicked = true
  mainClicked = true
  tidurClicked = true

  if (obatClicked) {
    //set character ke character obat
    //tambah sfx obat
    charStatus = 3
  } else {
    //set character ke character awal
    charStatus = 0
  }
  obatClicked = !obatClicked
})

btnMain.addEventListener("click", function () {
  makanClicked = true
  obatClicked = true
  tidurClicked = true

  if (mainClicked) {
    //set character ke character main
    //tambah sfx main
    charStatus = 4
  } else {
    //set character ke character awal
    charStatus = 0
  }
  mainClicked = !mainClicked
})

function main(){
  //belom isi
  
  if (vlevel == 100) {
      vlevel = 0
      wlevel.style.width = vlevel + "%"
      
  }else{
    vlevel = vlevel + incLevel
    wlevel.style.width = vlevel + "%"
  }
}

setInterval(main, 100)

//Code untuk Clock & Changing Background
var realStartTime = new Date().getTime();
var images = [
  new Image(),
  new Image(),
  new Image(),
  new Image()
];
images[0].src = '/assets/backgrounds/PagiGIF.gif';
images[1].src = '/assets/backgrounds/SiangGIF.gif';
images[2].src = '/assets/backgrounds/SoreGIF.gif';
images[3].src = '/assets/backgrounds/MalamGIF.gif';

function background_change(hrs) {
  var containerMain = document.getElementById("containerMain")
  const greetings = document.getElementById("greetings")
  if (hrs >= 6 && hrs < 10) {
    // morning
    greetings.innerText="Wilujeng Enjing " + nama
    containerMain.style.backgroundImage = 'url(' + images[0].src + ')';
  } else if (hrs >= 10 && hrs < 15) {
    // afternoon
    greetings.innerText = "Sugeng Siang " + nama
    containerMain.style.backgroundImage = 'url(' + images[1].src + ')';
  } else if (hrs >= 15 && hrs < 18) {
    // evening
    greetings.innerText = "Konbanwa " + nama
    containerMain.style.backgroundImage = 'url(' + images[2].src + ')';
  } else {
    // night time
    greetings.innerText = "Gute Nacht " + nama
    containerMain.style.backgroundImage = 'url(' + images[3].src + ')';
  }
}

function realTime() {
  var currTime = new Date().getTime();
  var elapsedTime = currTime - realStartTime;
  var speed = 60;

  var dateTime = new Date();
  dateTime.setTime(dateTime.getTime() + (elapsedTime * speed));

  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();

  var timeDisplay = hrs < 10 ? '0' + hrs : hrs;
  timeDisplay += ':';
  timeDisplay += min < 10 ? '0' + min : min;

  document.getElementById('clock').textContent = timeDisplay;

  background_change(hrs);
}
//run background change code every 100 ms
setInterval(realTime, 100);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // calculate the boundaries of the parent div:
    const parentDiv = elmnt.parentElement;
    const parentRect = parentDiv.getBoundingClientRect();
    const parentLeft = parentRect.left;
    const parentTop = parentRect.top;
    const parentRight = parentRect.right;
    const parentBottom = parentRect.bottom;
    // calculate the boundaries of the draggable element:
    const elementRect = elmnt.getBoundingClientRect();
    const elementLeft = elementRect.left;
    const elementTop = elementRect.top;
    const elementRight = elementRect.right;
    const elementBottom = elementRect.bottom;
    // calculate the new position of the element:
    const newLeft = elementLeft - pos1;
    const newTop = elementTop - pos2;
    const newRight = elementRight - pos1;
    const newBottom = elementBottom - pos2;
    // check if the new position is within the boundaries of the parent div:
    if (newLeft >= parentLeft && newTop >= parentTop && newRight <= parentRight && newBottom <= parentBottom) {
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(activeChar)

$(document).ready(function () {
  // Select the charView and containerMain elements
  var charView = $("#charView");
  var containerMain = $("#containerMain");

  // Define the animation function
  function animate() {
    // Calculate the maximum left offset based on the width of containerMain
    var maxWidth = containerMain.width() - charView.width();
    // Generate a random left offset within the maximum limit
    var offset = Math.floor(Math.random() * (maxWidth + 1));
    // Set the left CSS property of charView
    charView.animate({left:offset}, 500)
  }

  // Trigger the animation every 1 to 5 seconds
  setInterval(animate, Math.floor(Math.random() * 10001) + 3000);
});

