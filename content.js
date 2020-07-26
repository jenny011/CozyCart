chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString(); "
    }, function(selection) {
        chrome.tabs.create({
            //url: "https://www.amazon.com/s?k=" + selection[0] + "&i=amazonfresh" 
            url: "./products.html"
        });
    });
});

// function getSelection() {
//     var selectedText = document.getSelection().toString().trim();

//     if (selectedText) {
//     	chrome.runtime.sendMessage({msg: selectedText});
//     }
// }

// document.addEventListener("mouseup", getSelection);
