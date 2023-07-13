const soundBtnList = [...document.getElementsByClassName("soundBtn")];
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom")

const upperCaseKey = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const lowerCaseKey = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const sound = [boom, clap, hihat, kick, openhat, ride, snare, tink, tom];
let i;
document.addEventListener("keypress", (event) => {
    for (i = 0; i < sound.length; i++){
        if (event.key == upperCaseKey[i] || event.key == lowerCaseKey[i]){
            sound[i].play();
        }
    }
})

const soundString = ["BOOM", "CLAP", "HIHAT", "KICK", "OPENHAT", "RIDE", "SNARE", "TINK", "TOM"];
soundBtnList.forEach((soundBtn) => {
    soundBtn.addEventListener("click", (event) =>{
        for (i = 0; i < sound.length; i++){
            if (event.target.textContent == soundString[i]){
                sound[i].play();
            }
        }
})
})
