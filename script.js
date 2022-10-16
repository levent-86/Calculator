const typeScreen = document.querySelector(".type-screen");
const resultScreen = document.querySelector(".result-screen");
const btns = document.querySelectorAll(".btn");
const hidden = document.querySelector(".hidden");


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        update(btn);
    });
});

function update(btn) {
    typeScreen.value += btn.innerText;
    
        if (btn == btns[16]) {
            resultScreen.innerText = eval(hidden.innerText);
            typeScreen.value = hidden.innerText;
            typeScreen.value = "";
        }

    hidden.innerText = typeScreen.value;

    if (btn == btns[0]) {
        typeScreen.value = "";
    }
    if (btn == btns[1]) {
        let x = typeScreen.value.length - 1;
        typeScreen.value = typeScreen.value.substring(0, x * x / x - 1);
        hidden.innerText = hidden.innerText.substring(0, x * x / x - 1);
    }
    const limiter = typeScreen.getAttribute("maxlength");
        if (typeScreen.value.length > 10) {
            typeScreen.value = typeScreen.value.substring(0, limiter);
        }
}