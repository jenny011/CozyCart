function getSelection() {
    var selectedText = document.getSelection().toString().trim();

    if (selectedText) {
    	chrome.runtime.sendMessage({msg: selectedText});
    }
}

document.addEventListener("mouseup", getSelection);
