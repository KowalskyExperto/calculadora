const buttonPercent = document.getElementById("button-percent");
const buttonSeven = document.getElementById("button-seven");

buttonSeven.addEventListener(
    "click"
    ,() => addTextToSecondLine("7")
)
buttonPercent.addEventListener(
    "click"
    ,() => addTextToSecondLine("%")
);

const addTextToSecondLine = (word) => {
    const secondLine = document.getElementById("second-line");
    const oldText = secondLine.textContent;
    secondLine.textContent = oldText + word
};