const buttonPercent = document.getElementById("button-percent");
const buttonCE = document.getElementById("button-ce")
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
const button9 = document.getElementById("button-9");
const button0 = document.getElementById("button-0");
const buttonDot = document.getElementById("button-dot");


button1.addEventListener(
    "click"
    ,() => addTextToSecondLine("1")
);

button2.addEventListener(
    "click"
    ,() => addTextToSecondLine("2")
);

button3.addEventListener(
    "click"
    ,() => addTextToSecondLine("3")
);

button4.addEventListener(
    "click"
    ,() => addTextToSecondLine("4")
);

button5.addEventListener(
    "click"
    ,() => addTextToSecondLine("5")
);

button6.addEventListener(
    "click"
    ,() => addTextToSecondLine("6")
);

button7.addEventListener(
    "click"
    ,() => addTextToSecondLine("7")
);

button8.addEventListener(
    "click"
    ,() => addTextToSecondLine("8")
);

button9.addEventListener(
    "click"
    ,() => addTextToSecondLine("9")
);

button0.addEventListener(
    "click"
    ,() => addTextToSecondLine("0")
);

buttonDot.addEventListener(
    "click"
    ,() => addTextToSecondLine(".")
);

buttonPercent.addEventListener(
    "click"
    ,() => addTextToFirstLine("%")
);

buttonCE.addEventListener(
    "click"
    ,() => clearSecondLine()
);

const clearSecondLine = () => {
    document.getElementById("second-line").textContent = "0";
};

const addTextToSecondLine = function (word) {
    const oldText = document.getElementById("second-line").textContent;
    if(word === '.' && oldText.includes('.')){
        word = '';
    };
    document.getElementById("second-line").textContent = oldText + word;
};

const addTextToFirstLine = function (word) {
    document.getElementById("first-line").textContent = document.getElementById("second-line").textContent + " " + word;
    clearSecondLine();
};