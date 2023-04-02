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
var decMain = 0.25
var decTidur = 0.5
var decObat = 0

var incMakan = 0
var incMain = 0
var incTidur = 0
var incObat = 0
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

//get element level view
let levelView = document.getElementById("viewLevel")

function getCharacter() {
  localStorage.setItem("character", document.querySelector(".carousel-item.active").querySelector("img").getAttribute("src"))
  localStorage.setItem("nama", document.getElementById("namaBang").value)
}

//ambil dari localstorage
var nama = localStorage.getItem("nama")
const character = localStorage.getItem("character")

//checking jika data sudah masuk ke home
console.log(character)
console.log(nama)

//declare/load asset-asset character
const babynormal =  character + "_baby_normal.gif"
const babysleep =  character + "_baby_sleep.gif"
const babyeat =  character + "_baby_eat.gif"
const babyheal =  character + "_baby_heal.gif"
const babysick =  character + "_baby_sick.gif"

const teennormal = character + "_teen_normal.gif"
const teensleep = character + "_teen_sleep.gif"
const teeneat = character + "_teen_eat.gif"
const teenheal = character + "_teen_heal.gif"
const teensick = character + "_teen_sick.gif"

const oldnormal = character + "_old_normal.gif"
const oldsleep = character + "_old_sleep.gif"
const oldeat = character + "_old_eat.gif"
const oldheal = character + "_old_heal.gif"
const oldsick = character + "_old_sick.gif"

//set character di home
var charTemp = character;
var activeChar = document.getElementById("charView")

// activeChar.setAttribute("src", charTemp)

const btnMakan = document.querySelector("#btnMakan")
const btnTidur = document.querySelector("#btnTidur")
const btnMain = document.querySelector("#btnMain")
const btnObat = document.querySelector("#btnObat")

var makanClicked = true;
var tidurClicked = true;
var mainClicked = true;
var obatClicked = true;

var level = 1;
var strLevel = "Level " + level

//code untuk gonta-ganti aktivitas
btnMakan.addEventListener("click", function(){
  tidurClicked=true
  mainClicked=true  
  obatClicked=true  

  if(makanClicked){
    //set character ke character makan
    charTemp = teeneat
    activeChar.setAttribute("src", charTemp)
    //tambah sfx makan
    charStatus = 1
  }else{
    //set character ke character awal
    charTemp = teennormal
    activeChar.setAttribute("src", charTemp)
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
    charTemp = teensleep
    activeChar.setAttribute("src", charTemp)
    //tambah sfx tidur
    charStatus = 2
  } else {
    //set character ke character awal
    charTemp = teennormal
    activeChar.setAttribute("src", charTemp)
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
    charTemp = teenheal
    activeChar.setAttribute("src", charTemp)
    //tambah sfx berobat
    charStatus = 3
  } else {
    //set character ke character awal
    charTemp = teennormal
    activeChar.setAttribute("src", charTemp)
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
    charTemp = teennormal
    activeChar.setAttribute("src", charTemp)
    //tambah sfx main
    charStatus = 4
  } else {
    //set character ke character awal
    charTemp = teennormal
    activeChar.setAttribute("src", charTemp)
    charStatus = 0
  }
  mainClicked = !mainClicked
})


var paused = false

var intervalMain = setInterval(function () {
  if (!paused) {
    main()
  }
}, 1000)

function pause() {
  paused = true
}

function unpause() {
  paused = false
}

function main(){
  if(vmakan==0){
    clearInterval(intervalMain)
    alert("Ngurus piaraan virtual aja gabisa, boro-boro ngurus jodoh.")
    window.location.href = "index.html"
  }
  if (vtidur == 0) {
    clearInterval(intervalMain)
    alert("Ngurus piaraan virtual aja gabisa, boro-boro ngurus jodoh.")
    window.location.href = "index.html"
  }
  if (vobat == 0) {
    clearInterval(intervalMain)
    alert("Ngurus piaraan virtual aja gabisa, boro-boro ngurus jodoh.")
    window.location.href = "index.html"
  }
  if (vmain == 0) {
    clearInterval(intervalMain)
    alert("Ngurus piaraan virtual aja gabisa, boro-boro ngurus jodoh.")
    window.location.href = "index.html"
  }

  if (vlevel>=100) {
    level++
    strLevel = "Level "+level
    vlevel = 0
    wlevel.style.width = vlevel + "%"
    // charTemp = character
    charStatus = 0
  }

  levelView.innerText = strLevel
  activeChar.setAttribute("src", charTemp)

  if (charStatus == 0) {//status idle
    //redeclare increment/decrement
    decMakan = 0.75
    decMain = 0.2
    decTidur = 0.5
    decObat = 0.1
    incLevel = 0.5

    if (jamGame>=20 && jamGame<=24) {
      decTidur = 0.75
    }else if(jamGame>=0 && jamGame<=6){
      decTidur = 0.9
    }

    if (vmakan<=20) {
      decObat = 1
    }
    if (vobat<20) {
      charTemp = teensick
      activeChar.setAttribute("src", charTemp)
    }
    if (vmakan<=0) {
      vmakan = 0
      wmakan.style.width = vmakan +"%"
    }else{
      vmakan-=decMakan
      wmakan.style.width = vmakan +"%"
    }
    if (vtidur <= 0) {
      vtidur = 0
      wtidur.style.width = vtidur + "%"
    } else {
      vtidur-=decTidur
      wtidur.style.width = vtidur + "%"
    }
    if (vobat <= 0) {
      vobat = 0
      wobat.style.width = vobat + "%"
    } else {
      vobat -=decObat
      wobat.style.width = vobat + "%"
    }
    if (vmain <= 0) {
      vmain = 0
      wmain.style.width = vmain + "%"
    } else {
      vmain -=decMain
      wmain.style.width = vmain + "%"
    }

    vlevel += incLevel
    wlevel.style.width = vlevel + "%"
  }else if (charStatus == 1){//status makan
    //declare increment/decrement
    decMakan=0.75
    decTidur=0.5
    decMain=0.2

    //increase stat makan dan health ketika makan + increase level
    incMakan = 5
    incObat = 1
    vmakan += incMakan
    wmakan.style.width = vmakan + "%"
    vobat += incObat
    wobat.style.width = vobat +"%"

    incLevel = 1
    vlevel += incLevel
    wlevel.style.width=vlevel + "%"

    //decrease stat tidur & main, checking kalo abis
    if (vtidur <= 0) {
      vtidur = 0
      wtidur.style.width = vtidur + "%"
    } else {
      vtidur -= decTidur
      wtidur.style.width = vtidur + "%"
    }
    if (vmain <= 0) {
      vmain = 0
      wmain.style.width = vmain + "%"
    } else {
      vmain -= decMain
      wmain.style.width = vmain + "%"
    }

    if (vmakan>99) {
      charTemp = teennormal
      activeChar.setAttribute("src", charTemp)
      charStatus=0
      makanClicked = !makanClicked
    }
  } else if (charStatus == 2) {//status tidur
    //declare increment/decrement
    decMakan = 0.25
    decTidur = 0.5
    decMain = 0.2

    //increase stat tidur dan health ketika tidur + increase level
    incTidur = 5
    incObat = 1
    vtidur += incTidur
    wtidur.style.width = vtidur + "%"
    vobat += incObat
    wobat.style.width = vobat + "%"

    incLevel = 0.75
    vlevel += incLevel
    wlevel.style.width = vlevel + "%"

    //decrease stat tidur makan & main, checking kalo abis
    if (vtidur <= 0) {
      vtidur = 0
      wtidur.style.width = vtidur + "%"
    } else {
      vtidur -= decTidur
      wtidur.style.width = vtidur + "%"
    }
    if (vmain <= 0) {
      vmain = 0
      wmain.style.width = vmain + "%"
    } else {
      vmain -= decMain
      wmain.style.width = vmain + "%"
    }
    if (vmakan <= 0) {
      vmakan = 0
      wmakan.style.width = vmakan + "%"
    } else {
      vmakan -= decMakan
      wmakan.style.width = vmakan + "%"
    }

    if (vtidur > 99) {
      charTemp = teennormal
      activeChar.setAttribute("src", charTemp)
      charStatus = 0
      tidurClicked = !tidurClicked
    }
  } else if (charStatus == 3) {//status berobat
    //declare increment/decrement
    decMakan = 0.75
    decTidur = 0.5
    decMain = 0.2

    //increase stat health + increase level
    incObat = 2.5
    vobat += incObat
    wobat.style.width = vobat + "%"

    incLevel = 0.75
    vlevel += incLevel
    wlevel.style.width = vlevel + "%"

    //decrease stat makan tidur & main, checking kalo abis
    if (vtidur <= 0) {
      vtidur = 0
      wtidur.style.width = vtidur + "%"
    } else {
      vtidur -= decTidur
      wtidur.style.width = vtidur + "%"
    }
    if (vmain <= 0) {
      vmain = 0
      wmain.style.width = vmain + "%"
    } else {
      vmain -= decMain
      wmain.style.width = vmain + "%"
    }
    if (vmakan <= 0) {
      vmakan = 0
      wmakan.style.width = vmakan + "%"
    } else {
      vmakan -= decMakan
      wmakan.style.width = vmakan + "%"
    }

    if (vobat > 99) {
      charTemp = teennormal
      activeChar.setAttribute("src", charTemp)
      charStatus = 0
      obatClicked = !obatClicked
    }
  } else if (charStatus == 4) {//status berobat
    //declare increment/decrement
    decMakan = 1.5
    decTidur = 1
    decObat = 2
    decMain = 0

    //increase stat main + increase level

    incMain = 2.5
    vmain += incMain
    wmain.style.width = vmain + "%"

    incLevel = 1.5
    vlevel += incLevel
    wlevel.style.width = vlevel + "%"

    //decrease stat makan tidur main & obat, checking kalo abis
    if (vtidur <= 0) {
      vtidur = 0
      wtidur.style.width = vtidur + "%"
    } else {
      vtidur -= decTidur
      wtidur.style.width = vtidur + "%"
    }
    if (vmain <= 0) {
      vmain = 0
      wmain.style.width = vmain + "%"
    } else {
      vmain -= decMain
      wmain.style.width = vmain + "%"
    }
    if (vmakan <= 0) {
      vmakan = 0
      wmakan.style.width = vmakan + "%"
    } else {
      vmakan -= decMakan
      wmakan.style.width = vmakan + "%"
    }
    if (vobat <= 0) {
      vobat = 0
      wobat.style.width = vobat + "%"
    } else {
      vobat -= decObat
      wobat.style.width = vobat + "%"
    }

    if (vmain > 99) {
      charTemp = teennormal
      activeChar.setAttribute("src", charTemp)
      charStatus = 0
      mainClicked = !mainClicked
    }
  }
}

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

var jamGame
function realTime() {
  var currTime = new Date().getTime();
  var elapsedTime = currTime - realStartTime;
  var speed = 60;

  var dateTime = new Date();
  dateTime.setTime(dateTime.getTime() + (elapsedTime * speed));

  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  jamGame = hrs

  var timeDisplay = hrs < 10 ? '0' + hrs : hrs;
  timeDisplay += ':';
  timeDisplay += min < 10 ? '0' + min : min;

  document.getElementById('clock').textContent = timeDisplay;

  background_change(hrs);
}
//run background change code every 100 ms
setInterval(function () {
  if (!paused) {
    realTime()
  }
}, 100);

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
  setInterval(function () {
    if (!paused) {
      animate()
    }
  }, Math.floor(Math.random() * 10001) + 3000);
});

