document.getElementById("encryptButton").addEventListener("click", function () {
    var inputText = document.getElementById("inputText").value;
    var outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = outputText;
});

document.getElementById("decryptButton").addEventListener("click", function () {
    var inputText = document.getElementById("inputText").value;
    var outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = outputText;
});

document.getElementById("copyButton").addEventListener("click", function () {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
});

document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
});
