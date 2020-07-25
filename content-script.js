/*
copy the selected text to clipboard
*/
function copySelection() {
    var selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        console.log(selectedText);
    }
}

/*
Add copySelection() as a listener to mouseup events.
*/
document.addEventListener("mouseup", copySelection);
