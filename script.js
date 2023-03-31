function getCharacter(){
    localStorage.setItem("character", document.querySelector(".carousel-item.active").querySelector("img").getAttribute("src"))
    localStorage.setItem("nama", document.getElementById("namaBang").value)
}

var nama = localStorage.getItem("nama")
var character = localStorage.getItem("character")

console.log(character)
console.log(nama)

var charTemp = character;

var activeChar = document.getElementById("characterView")
document.getElementById("nameView").innerHTML = nama

activeChar.setAttribute("src", charTemp)

