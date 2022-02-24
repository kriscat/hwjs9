const boxes = document.querySelectorAll(".box");
const input = document.getElementById("input");
const inputWidth = document.getElementById("input-width");

let oddColorizer = (changes) => {
    let arr = changes.split(" ");
    boxes.forEach((e, key) => {
        e.style = `
        background: linear-gradient(130deg, ${arr[0]}, red);
        width: ${arr[1]}px;
        border-radius: ${arr[2]}px;
        `;
    });
};
window.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        oddColorizer(input.value);
        input.value = "";
    }
});