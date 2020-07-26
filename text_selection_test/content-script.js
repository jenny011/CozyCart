// /*
// copy the selected text to clipboard
// */
// function copySelection() {
//     var selectedText = window.getSelection().toString().trim();

//     if (selectedText) {
//         console.log(selectedText);
//     }
// }

// /*
// Add copySelection() as a listener to mouseup events.
// */
// document.addEventListener("mouseup", copySelection);

/**
* Gets the HTML of the user's selection
*/

/*
new tab
*/
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString(); "
    }, function(selection) {
        chrome.tabs.create({
            url: "https://www.amazon.com/s?k=" + selection[0] + "&i=amazonfresh" 
        });
    });
});
// /*
//	popup window
//	*/
// chrome.browserAction.onClicked.addListener(function() {
//     chrome.tabs.executeScript({
//         code: "window.getSelection().toString(); "
//     }, function(selection) {
//         chrome.windows.create({
//             url: "https://www.amazon.com/s?k=" + selection[0] + "&i=amazonfresh", type: "popup"
//         }, function(window){});
//     });
// });
