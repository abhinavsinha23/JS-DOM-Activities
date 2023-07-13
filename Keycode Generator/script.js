alert("Welcome to the Keycode Generator! Press any key to get the JavaScript event keycode.");

const keycode = document.getElementById("keycode");
const key = document.getElementById("key");
const charCode = document.getElementById("charCode");

document.addEventListener("keypress", (event) => {
    keycode.textContent = `event.code: ${event.code}`;
    key.textContent = `event.key: ${event.key}`;
    charCode.textContent = `event.charCode: ${event.charCode}`;
})

