window.addEventListener("load", init, false);

function init(event) {
    document.body.style.backgroundColor = "#ff76cf";

    let colorInput = document.querySelector("#colorInput");
    colorInput.addEventListener("change", pickcolor, false);
}

function pickcolor(event) {
    document.body.style.backgroundColor = event.target.value;
}