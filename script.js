const textArea = document.getElementById("textarea");

const upperCaseBtn = document.getElementById("upper-case");
const lowerCaseBtn = document.getElementById("lower-case");
const properCaseBtn = document.getElementById("proper-case");
const sentenceCaseBtn = document.getElementById("sentence-case");
const saveBtn = document.getElementById("save-text-file");

function upperCaseBtnClickHandler () {
    textArea.value = textArea.value.toUpperCase();
}

function lowerCaseBtnClickHandler () {
    textArea.value = textArea.value.toLowerCase();
}

function properCaseBtnClickHandler () {
    const string = textArea.value;
    const words = string.split(" ");

    const result = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    });

    textArea.value = result.join(" ");
}

function sentenceCaseBtnClickHandler() {
    const string = textArea.value;
    const sentences = string.split(". ");

    const result = sentences.map((item)=> {
        return item[0].toUpperCase() + item.slice(1).toLowerCase();
    });

    textArea.value = result.join(". ");
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function saveBtnClickHandler() {
    const string = textArea.value;

    download("text.txt", string);
}

upperCaseBtn.addEventListener("click", upperCaseBtnClickHandler);
lowerCaseBtn.addEventListener("click", lowerCaseBtnClickHandler);
properCaseBtn.addEventListener("click", properCaseBtnClickHandler);
sentenceCaseBtn.addEventListener("click", sentenceCaseBtnClickHandler);
saveBtn.addEventListener("click", saveBtnClickHandler);
