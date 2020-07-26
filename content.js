var keyword;

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString(); "
    }, function(selection) {
    	keyword = selection[0];
        chrome.tabs.create({
            //url: "https://www.amazon.com/s?k=" + selection[0] + "&i=amazonfresh" 
            url: "./products.html"
        });
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.poke == "get product links") {
		sendResponse({product: keyword, links: [{name: "1", content: "1"}]})
	} else {
		sendResponse("Don't understand the request");
	}
});

// function getSelection() {
//     var selectedText = document.getSelection().toString().trim();

//     if (selectedText) {
//     	chrome.runtime.sendMessage({msg: selectedText});
//     }
// }

// document.addEventListener("mouseup", getSelection);
